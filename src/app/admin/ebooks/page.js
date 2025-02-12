import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import React from "react";

const Page = async () => {
    let ebooks = [];
    try {
        const result = await useServerSideFetch("/api/user");
        ebooks = result.data.ebooks;
    } catch (err) {}
    return (
        <>
            <Table data={ebooks} />
        </>
    );
};

export default Page;
