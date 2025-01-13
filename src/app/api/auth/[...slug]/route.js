import { NextResponse } from "next/server";
import { forwordCookieToClient } from "../../../../utils/forword-cookie";
export async function POST(request, { params }) {
    console.log(`${process.env.BASE_URL}/${params.slug.join("/")}`);
    const body = await request.text();
    const res = await fetch(`http://localhost:4000/logout`, {
        method: request.method,
        credentials: "include",
        headers: {
            "content-type": "application/json",
        },
        body: body && JSON.stringify(JSON.parse(body)),
    });
    const result = await res.json();
    const response = NextResponse.json(result);
    forwordCookieToClient(res, response);
    return response;
}
