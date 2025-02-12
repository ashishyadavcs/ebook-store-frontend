"use server";
import config from "@/config/index";
import { cookies } from "next/headers";

export const setCookie = async (name, value, options = {}) => {
    const cookieStore = await cookies();
    try {
        const req = await fetch(
            `${config.APP_URL}/api/cookie`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString(),
                },
                body: JSON.stringify({
                    name,
                    value,
                    options,
                }),
            },
            { caches: "no-store" }
        );
        return req.json({
            cookies: cookieStore.getAll(),
        });
    } catch (err) {
        console.log(err);
    }
};
