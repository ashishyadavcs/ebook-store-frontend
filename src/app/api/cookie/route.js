import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, value, options = {} } = await req.json();
        const cookie = await cookies();

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
