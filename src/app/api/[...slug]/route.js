import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { forwordCookieToClient } from "../../../utils/forword-cookie";

export async function GET(req) {
    return sendRequest(req, req.method);
}
export async function POST(req) {
    return sendRequest(req, req.method);
}
export async function PATCH(req) {
    return sendRequest(req, req.method);
}
export async function DELETE(req) {
    return sendRequest(req, req.method);
}

async function sendRequest(req, method) {
    const BASE_URL = process.env.BASE_URL;
    const cookieStore = await cookies();

    let accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    console.log({ accesstoken, refreshtoken });
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
            return NextResponse(
                JSON.stringify({
                    success: false,
                    message: "unauthorized",
                }),
                { status: 401 }
            );
        }
        const data = await result.json();
        console.log({ data });
        accesstoken = data.accesstoken;
        const response = new NextResponse(JSON.stringify(data));
        forwordCookieToClient(result, response);
        // return response;
        const body = await req.json();
        const options = {
            method,
            headers: {
                authorization: `Bearer ${accesstoken}`,
                "Content-Type": req.headers["Content-Type"] || "application/json",
            },
            body: method != "GET" ? JSON.stringify(body) : undefined,
        };

        const url = new URL(req.url);
        const slug = url.pathname.split("/api/")[1];
        console.log({ options });
        const response1 = await fetch(`${BASE_URL}/${slug}`, options);
        if (!response1.ok) {
            return new NextResponse(
                JSON.stringify({
                    success: false,
                    message: "internal server error",
                }),
                { status: response.status }
            );
        }
        const result1 = await response1.json();
        console.log(result1);
        return NextResponse.json(result1);
    } else {
        console.log("out refresh");
        console.log("brearerr", accesstoken);
        const body = await req.json();
        const options = {
            method,
            headers: {
                authorization: `Bearer ${accesstoken}`,
                "Content-Type": req.headers["Content-Type"] || "application/json",
            },
            body: method != "GET" ? JSON.stringify(body) : undefined,
        };

        const url = new URL(req.url);
        const slug = url.pathname.split("/api/")[1];
        console.log({ options });
        const response = await fetch(`${BASE_URL}/${slug}`, options);
        if (!response.ok) {
            return new NextResponse(
                JSON.stringify({
                    success: false,
                    message: "internal server error",
                }),
                { status: response.status }
            );
        }
        const result = await response.json();
        console.log(result);
        return NextResponse.json(result);
    }
}
