import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import _config from "@/config/index.js";

export async function GET(req, { params }) {
    return sendRequest(req, params);
}
export async function POST(req, { params }) {
    return sendRequest(req, params);
}
export async function PATCH(req, { params }) {
    return sendRequest(req, params);
}
export async function DELETE(req, { params }) {
    return sendRequest(req, params);
}
async function sendRequest(req, params) {
    const method = req.method;
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;

    const options = {
        method,
        credentials: "include",
        headers: {
            Authorization: `Bearer ${accesstoken}`,
            ...(req.headers.get("Content-Type")?.includes("json") && {
                "Content-Type": req.headers.get("Content-Type"),
            }),
            //no content-type required for formdata
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
    const { slug } = await params;

    try {
        const response = await fetch(`${_config.BASE_URL}/${slug.join("/")}`, options);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const result = await response.json();
        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: err.message,
            },
            { status: 500 }
        );
    }
}
