import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {config} from "../../../config/index.js";

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
            Authorization: `Bearer ${accesstoken}`,
            "Content-Type": req.headers.get("Content-Type"),
        },
    };

    if (method !== "GET") {
        if (req.headers.get("Content-Type").includes("json")) {
            options.body = JSON.stringify(await req.json());
        } else {
            const formData = await req.formData();
            options.body = formData;
        }
    }

    const url = new URL(req.url);
    const slug = url.pathname.split("/api/")[1];
    console.log(options);
    const response1 = await fetch(`${config.BASE_URL}/${slug}`, options);

    if (!response1.ok) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: response1.statusText,
            }),
            { status: response1.status }
        );
    }

    const result1 = await response1.json();
    console.log(result1);
    return NextResponse.json(result1);
}
