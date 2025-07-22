import { NextResponse } from "next/server";
import config from "@/config/index.js";
export const dynamic = "force-dynamic";
export async function POST(request, { params }) {
    const body = await request.text();
    const _params = await params;
    // const incomingHeaders = Object.fromEntries(request.headers.entries());
    const res = await fetch(`${config.BASE_URL}/${_params.slug.join("/")}`, {
        method: request.method,
        credentials: "include",
        headers: {
            "content-type": "application/json",
            cookie: request.headers.get("cookie"),
            "User-agent": request.headers.get("user-agent"),
        },
        body: body ? body : undefined,
    });

    const result = await res.json();
    // Create response with proper headers and cookies
    const response = NextResponse.json(result, {
        status: res.status,
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
