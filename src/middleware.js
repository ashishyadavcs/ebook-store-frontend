import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const cookieStore = await cookies();
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    console.log("inside middlware");
    if (!refreshtoken) {
        const loginurl = new URL("/login", request.url);
        loginurl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginurl);
    }
}

export const config = {
    matcher: ["/admin", "/api", "/api/:path*"],
};
