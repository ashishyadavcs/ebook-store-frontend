import { NextResponse } from "next/server";
import { forwordCookieToClient } from "@/utils/forword-cookie";
import config from "@/config/index.js";
export async function POST(request, { params }) {
    const body = await request.text();
    const _params=await params
    const res = await fetch(`${config.BASE_URL}/${_params.slug.join("/")}`, {
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
