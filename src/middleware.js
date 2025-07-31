import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import _config from "@/config/index.js";

export async function middleware(request) {
    const url = request.nextUrl;
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;

    // Allow public and auth routes
    if (url.pathname.startsWith("/api")) {
        return NextResponse.next(); //allow api requests to continue
    }

    if (!refreshtoken) {
        const loginurl = new URL("/login", request.url);
        loginurl.searchParams.set("from", url.pathname);
        return NextResponse.redirect(loginurl);
    }

    if (url.pathname.startsWith("/admin")) {
        try {
            const res = await fetch(`${_config.APP_URL}/api/user`, {
                headers: {
                    Authorization: `Bearer ${accesstoken}`,
                    Cookie: cookieStore.toString(),
                },
            });
            if (!res.ok) throw new Error("User fetch failed");
            const data = await res.json();
            if (!data?.data?.user || data.data.user.role !== "admin") {
                const dashboardURL = new URL("/dashboard", request.url);
                return NextResponse.redirect(dashboardURL);
            }
        } catch {
            const loginurl = new URL("/login", request.url);
            loginurl.searchParams.set("from", url.pathname);
            return NextResponse.redirect(loginurl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/api/:path*",
        "/api",
        "/checkout",
        "/viewcart",
        "/admin",
        "/admin/:path*",
    ],
};
