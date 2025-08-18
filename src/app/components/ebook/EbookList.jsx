import { EbooksContainer } from "@/styles/ebooks.styled";
import Ebook from "@/components/ebook/Ebook";
import Link from "next/link";
import { memo } from "react";
import { useServerSideFetch } from "@/utils/ssr-api-call";

const EbookList = async ({ data, size = 250 }) => {
    let ebooks = [];
    if (!data) {
        try {
            const result = await useServerSideFetch("/api/ebooks");
            ebooks = result.data.reverse();
        } catch (err) {}
    } else {
        ebooks = [...data];
    }
    ebooks = Array.from(new Map(ebooks.map(item => [item._id, item])).values());
    return (
        <EbooksContainer className="ebooks" size={size}>
            {ebooks.map((ebook, i) => (
                <Link
                    scroll={true}
                    prefetch={false}
                    key={ebook._id}
                    className="ebook-details"
                    title={ebook.title}
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
