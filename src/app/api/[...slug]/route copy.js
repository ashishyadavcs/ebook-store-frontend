import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { forwordCookieToClient } from "../../../utils/forword-cookie";

export async function POST(request, { params }) {
    const slug = (await params).slug.join("/");
    const requestURL = `${process.env.BASE_URL}/${slug}`;
    console.log("request url", requestURL);
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("refreshtoken")?.value;

    console.log({ accesstoken, refreshtoken });
    if (!accesstoken) {
        console.log("refreshing token");
        const res = await fetch(`${process.env.BASE_URL}/refreshtoken`, {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                token: refreshtoken,
            }),
        });
        if (!res.ok) {
            return NextResponse.json({
                error: "failed to refresh token",
            });
        }
        const result = await res.json();
        const response = NextResponse.json(result);
        forwordCookieToClient(res, response);
        const newAccessToken = result.accesstoken;
        //request now
        const body = await request.json();
        const res1 = await fetch(requestURL, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                authorization: newAccessToken,
            },
            body: JSON.stringify(body),
        });
        console.log("inside refresh rout");
        if (!res1.ok) {
            return NextResponse.json({ error: "failed to fetch" }, { status: res1.status });
        }
        return NextResponse.json(await res1.json(), { status: res1.status });
    } else {
        const body = await request.json();
        const res = await fetch(requestURL, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                authorization: accesstoken,
            },
            body: JSON.stringify(body),
        });
        if (!res.ok) {
            return NextResponse.json({ error: "failed to fetch" }, { status: res.status });
        }
        return NextResponse.json(await res.json(), { status: res.status });
    }
}
