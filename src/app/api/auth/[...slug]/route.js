import { NextResponse } from "next/server";
import config from "@/config/index.js";
export const dynamic = "force-dynamic";
export async function POST(request, { params }) {
    const body = await request.text();
    const _params = await params;
    // Forward all headers from the incoming request efficiently
    const incomingHeaders = Object.fromEntries(request.headers.entries());
    const res = await fetch(`${config.BASE_URL}/${_params.slug.join("/")}`, {
        method: request.method,
        credentials: "include",
        headers: { ...incomingHeaders },
        body: body ? body : undefined,
    });
    const result = await res.json();
    console.log(Object.fromEntries(res.headers.entries()));
    const response = NextResponse.json(result, {
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
    });
    return response;
}
