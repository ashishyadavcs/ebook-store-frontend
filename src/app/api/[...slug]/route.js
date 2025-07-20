import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import _config from "@/config/index.js";

export async function GET(req, { params }) {
    return authMiddleware(req, params);
}
export async function POST(req, { params }) {
    return authMiddleware(req, params);
}
export async function PATCH(req, { params }) {
    return authMiddleware(req, params);
}
export async function DELETE(req, { params }) {
    return authMiddleware(req, params);
}

async function authMiddleware(req, params) {
    const cookieStore = await cookies();
    let accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    if ((!refreshtoken && !accesstoken) || !refreshtoken) {
        return NextResponse.json(
            {
                success: false,
                redirect: "/login",
                message: "session expired, please login again",
            },
            { status: 401 }
        );
    }
    const method = req.method;
    const options = {
        method,
        credentials: "include",
        headers: {
            Authorization: `Bearer ${accesstoken}`,
            ...(req.headers.get("Content-Type")?.includes("json") && {
                "Content-Type": req.headers.get("Content-Type"),
            }),
            //no content-type required for formdata,
            Cookie: req.headers.get("cookie"),
        },
    };
    if (method !== "GET") {
        if (req.headers.get("Content-Type")?.includes("json")) {
            try {
                options.body = JSON.stringify(await req.json());
            } catch (err) {}
        } else {
            const formData = await req.formData();
            options.body = formData;
        }
    }

    try {
        const reqURL = `${_config.BASE_URL}/${req.url.split("/").slice(4).join("/")}`;
        const res = await fetch(reqURL, options);
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const result = await res.json();
        const response = NextResponse.json(result);
        // Forward response headers
        const setCookieHeaders = res.headers.get("set-cookie");
        if (setCookieHeaders) {
            // Handle multiple cookies if they exist
            const cookies = Array.isArray(setCookieHeaders) ? setCookieHeaders : [setCookieHeaders];
            cookies.forEach(cookie => {
                response.headers.append("Set-Cookie", cookie);
            });
        }
        return response;
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: err.message,
            },
            { status: 500 }
        );
    }
}
