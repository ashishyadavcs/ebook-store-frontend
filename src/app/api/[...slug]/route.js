import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
    return sendRequest(req);
}
export async function POST(req) {
    return sendRequest(req);
}
export async function PATCH(req) {
    return sendRequest(req);
}
export async function DELETE(req) {
    return sendRequest(req);
}

async function sendRequest(req) {
    const method = req.method;
    const BASE_URL = process.env.BASE_URL;

    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    if (!accesstoken && !refreshtoken) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    const options = {
        method,
        headers: {
            "Content-Type": req.headers["Content-Type"] || "application/json",
            Authorization: `Bearer ${accesstoken}`,
        },
    };

    if (method !== "GET") {
        options.body = JSON.stringify(await req.json());
    }

    const url = new URL(req.url);
    const slug = url.pathname.split("/api/")[1];

    const response1 = await fetch(`${BASE_URL}/${slug}`, options);
    if (!response1.ok) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "internal server error",
            }),
            { status: response1.status }
        );
    }
    const result1 = await response1.json();
    return NextResponse.json(result1);
}
