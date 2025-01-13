import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const BASE_URL = process.env.BASE_URL;
    const url = request.nextUrl;
    if (url.pathname.startsWith("/api/auth")) {
        return NextResponse.next();
    }
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;

    if (!accesstoken && refreshtoken) {
        const result = await fetch(`${BASE_URL}/refreshtoken`, {
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
        cookieStore.set("accesstoken", data.accesstoken); //add coookie on client

        const resSetCookies = result.headers.getSetCookie();
        const newheaders = new Headers();

        if (resSetCookies) {
            resSetCookies.forEach(setcookie => {
                newheaders.append("Set-Cookie", setcookie);
            });
        }
        return NextResponse.next({
            headers: newheaders,
        });
    }

    if (!refreshtoken && !accesstoken) {
        console.log("inside redirect");
        const loginurl = new URL("/login", request.url);
        loginurl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginurl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin", "/api/:path*", "/api"],
};
