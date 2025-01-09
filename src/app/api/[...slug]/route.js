import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const slug = (await params).slug.join("/");
    const requestURL = `${process.env.BASE_URL}/${slug}`;
    console.log("request url middlware", requestURL);
    const cookieStore = await cookies();
    const accesstoken = cookieStore.get("accesstoken")?.value;
    const refreshtoken = cookieStore.get("accesstoken")?.value;

    const sendRequest = async (requestURL, token) => {
        const body = await request.json();
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                credentials: "include",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (!result.ok) {
            throw result;
        }
        return new NextResponse(JSON.stringify(result), { status: 200 });
    };
    try {
        if (accesstoken && !refreshtoken) {
            console.log("refreshing token");
            const res = await fetch("http://localhost:4000/refreshtoken", {
                method: "POST",
                credentials: "include",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    token: refreshtoken,
                }),
            });
            const response = NextResponse.json(res);
            sendRequest()
        } else {
            sendRequest(requestURL, accesstoken);
        }
    } catch (err) {
        return new NextResponse(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
