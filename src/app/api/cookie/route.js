import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, value, options = {} } = await req.json();
        const cookie = await cookies();
        cookie.set(name, value, {
            ...options,
        });
        return NextResponse.json(
            {
                success: true,
            },
            {
                status: 200,
            }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false },
            {
                status: 500,
            }
        );
    }
}
export async function GET(req) {
    try {
        const cookie = await cookies();
        const allCookies = cookie.getAll();
        return NextResponse.json(
            {
                success: true,
                cookies: allCookies,
            },
            {
                status: 200,
            }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false },
            {
                status: 500,
            }
        );
    }
}
