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

    if (!refreshtoken) {
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
        "/dashboard/:path*",
        "/api/:path*",
        "/api",
        "/checkout",
        "/viewcart",
        "/admin",
        "/admin/:path*",
    ],
};
