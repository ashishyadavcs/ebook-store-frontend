import { NextResponse } from "next/server";
import config from "@/config/index.js";
export const dynamic = "force-dynamic";
export async function POST(request, { params }) {
    const body = await request.text();
    const _params = await params;
    const incomingHeaders = Object.fromEntries(request.headers.entries());
    const res = await fetch(`${config.BASE_URL}/${_params.slug.join("/")}`, {
        method: request.method,
        credentials: "include",
        headers: {
            "content-type": "application/json",
            // Forward relevant headers but exclude problematic ones
            ...Object.fromEntries(
                Object.entries(incomingHeaders).filter(
                    ([key]) =>
                        ![
                            "host",
                            "content-length",
                            "content-encoding",
                            "transfer-encoding",
                        ].includes(key.toLowerCase())
                )
            ),
        },
        body: body ? body : undefined,
    });

    const result = await res.json();
    // Create response with proper headers and cookies
    const response = NextResponse.json(result, {
        status: res.status,
        headers: {
            // Forward response headers
            ...Object.fromEntries(res.headers.entries()),
        },
    });

    // Explicitly forward Set-Cookie headers to set cookies in browser
    const setCookieHeaders = res.headers.get("set-cookie");
    if (setCookieHeaders) {
        // Handle multiple cookies if they exist
        const cookies = Array.isArray(setCookieHeaders) ? setCookieHeaders : [setCookieHeaders];
        cookies.forEach(cookie => {
            response.headers.append("Set-Cookie", cookie);
        });
    }
    return response;
}
