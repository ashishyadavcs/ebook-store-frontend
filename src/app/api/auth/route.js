import { NextResponse } from "next/server";
import { forwordCookieToClient } from "../../../utils/forword-cookie";
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
    forwordCookieToClient(res, response);
    return response;
}
