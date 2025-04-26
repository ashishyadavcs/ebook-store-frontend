import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import _config from "@/config/index.js";

export async function GET(req, { params }) {
    return authMiddleware(req, params);
}
export async function POST(req, { params }) {
    return authMiddleware(req, params);
}
export async function PATCH(req, { params }) {
    return authMiddleware(req, params);
}
export async function DELETE(req, { params }) {
    return authMiddleware(req, params);
}

async function sendRequest(req, params, accesstoken) {
    const method = req.method;

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
            try {
                options.body = JSON.stringify(await req.json());
            } catch (err) {}
        } else {
            const formData = await req.formData();
            options.body = formData;
        }
    }
    const { slug } = await params;

    try {
        const res = await fetch(`${_config.BASE_URL}/${slug.join("/")}`, options);
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const result = await res.json();
        return NextResponse.json(result, { headers: res.headers });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                success: false,
                message: err.message,
            },
            { status: 500 }
        );
    }
}
async function authMiddleware(req, params) {
    const cookieStore = await cookies();
    let accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;
    if (!accesstoken && refreshtoken) {
        const result = await fetch(`${_config.BASE_URL}/refreshtoken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: refreshtoken,
            }),
        });
        if (!result.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: err.message,
                },
                { status: 401 }
            );
        }
        const data = await result.json();

        accesstoken = data.accesstoken;
        return sendRequest(req, params, accesstoken);
    } else {
        return sendRequest(req, params, accesstoken);
    }
}
