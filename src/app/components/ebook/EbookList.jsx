import { EbooksContainer } from "@/styles/ebooks.styled";
import Ebook from "@/components/ebook/Ebook";
import Link from "next/link";
import { memo } from "react";
import { useServerSideFetch } from "@/utils/ssr-api-call";

const EbookList = async ({ data, size = 300, search, id = "jkhfur" }) => {
    let ebooks = [];
    if (!data) {
        try {
            const result = await useServerSideFetch("/api/ebooks");
            ebooks = result.data.reverse();
        } catch (err) {}
    } else {
        ebooks = [...data];
    }
    return (
        <EbooksContainer className="ebooks" size={size}>
            {ebooks
                .filter(eb => eb._id !== id)
                .map((ebook, i) => (
                    <Link
                        scroll={true}
                        prefetch={false}
                        key={ebook._id}
                        className="ebook-details"
                        href={`/${ebook._id}`}
                    >
                        <Ebook
                            preload={i < 4}
                            {...(i == 2 && { className: "trending" })}
                            key={ebook._id}
                            data={ebook}
                        />
                    </Link>
                ))}
        </EbooksContainer>
    );
};

export default memo(EbookList);
