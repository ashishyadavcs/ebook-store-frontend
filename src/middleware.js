import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    if(!accesstoken && refreshtoken){
        
    }
    if (!refreshtoken) {
        const loginurl = new URL("/login", request.url);
        loginurl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginurl);
    }
    return NextResponse.next()

}

export const config = {
    matcher: ["/admin", "/api", "/api/:path*"],
};
