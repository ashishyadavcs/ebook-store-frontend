import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import _config from "@/config/index.js";

export async function middleware(request) {
    const url = request.nextUrl;
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    const role = cookieStore.get("userrole")?.value;

    if (
        url.pathname.startsWith("/api/auth") ||
        url.pathname.startsWith("/api/cookie") ||
        (url.pathname.startsWith("/api/ebooks") && request.method === "GET")
    ) {
        return NextResponse.next();
    }
    if (!accesstoken && refreshtoken) {
        const result = await fetch(`${_config.BASE_URL}/refreshtoken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: refreshtoken,
            }),
        });
        if (!result.ok) {
            const loginurl = new URL("/login", request.url);
            loginurl.searchParams.set("from", request.nextUrl.pathname);
            return NextResponse.redirect(loginurl);
        }
        const data = await result.json();

        const resSetCookies = result.headers.getSetCookie();
        const newheaders = new Headers();

        if (resSetCookies) {
            resSetCookies.forEach(setcookie => {
                newheaders.append("Set-Cookie", setcookie);
            });
        }
        const response = NextResponse.next({
            headers: newheaders,
        });

        response.cookies.set("accesstoken", data.accesstoken, {
            httpOnly: true,
            secure: false,
            path: "/",
            maxAge: 3600, // Cookie expiry in seconds (e.g., 1 hour)
        });
        return response;
    }

    if (!refreshtoken && !accesstoken) {
        const loginurl = new URL("/login", request.url);
        loginurl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginurl);
    }
    if (role !== "admin" && url.pathname.includes("admin")) {
        const dashboardURL = new URL("/dashboard", request.url);
        return NextResponse.redirect(dashboardURL);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard",
        "/api/:path*",
        "/api",
        "/checkout",
        "/viewcart",
        "/admin",
        "/admin/:path*",
    ],
};
