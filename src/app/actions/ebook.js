"use server";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import { redirect } from "next/navigation";

export const deleteEbook = async id => {
    const res = await useServerSideFetch(`/api/ebooks/${id}`, {
        method: "DELETE",
    });
    await res.json();
    redirect(`/admin/ebooks?deleted?id=${id}`);
};
