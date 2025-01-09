import { NextResponse } from "next/server";
export async function POST(request) {
    const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: "aa@aa.aa",
            password: "123",
        }),
    });
    const result = await res.json();
    const response = NextResponse.json(result);
    //forword respose cookie to client
    const resSetCookies = res.headers.getSetCookie();
    if (resSetCookies) {
        resSetCookies.forEach(setcookie => {
            response.headers.append("Set-Cookie", setcookie);
        });
    }
    //forword respose cookie to client end
    return response;
}
