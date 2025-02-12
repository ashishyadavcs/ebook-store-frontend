import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import React from "react";

const Page = async () => {
    const { data: ebooks } = await useServerSideFetch("/api/ebooks");
    return (
        <>
            <Table data={ebooks} />
        </>
    );
};

export default Page;
