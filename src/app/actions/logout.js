"use server";
import config from "@/config/index";
import { cookies } from "next/headers";

export const logout = async () => {
    const token = await cookies();
    const res = await fetch(
        `${config.APP_URL}/api/auth/logout`,
        {
            method: "POST",
            body: JSON.stringify({
                token: token.get("refreshtoken")?.value,
            }),
        },
        { cache: "no-cache" }
    );
    const result = await res.json();
    if (result) {
        token.delete("accesstoken");
        token.delete("refreshtoken");
    }
};
