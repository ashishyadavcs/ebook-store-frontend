import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(params) {
    const cookie = await cookies();
    cookie.set("class", "10");
    return NextResponse.json({});
}
export async function POST(req) {
    try {
        const { name, value, options = {} } = await req.json();
        const cookie = await cookies();
        cookie.set(name, value);

        return NextResponse.json(
            {
                success: true,
            },
            {
                status: 200,
            }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { success: false },
            {
                status: 500,
            }
        );
    }
}
