"use server";
import { useServerSideFetch } from "@/utils/ssr-api-call";
export const updateUser = async formdata => {
    const response = await useServerSideFetch("/api/user", {
        method: "PATCH",
        body: formdata,
    });
    return response;
};
