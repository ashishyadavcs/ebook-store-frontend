import { EbooksContainer } from "@/styles/ebooks.styled";
import Ebook from "@/components/ebook/Ebook";
import config from "@/config/index";
import Link from "next/link";
import { memo } from "react";

const EbookList = async ({ data, size = 300, search }) => {
    let ebooks = data || [];
    if (!data) {
        try {
            const req = await fetch(`${config.APP_URL}/api/ebooks`, {
                next: {
                    revalidate: 10,
                },
            });
            const { data = [] } = await req.json();
            ebooks = [...data].reverse();
        } catch (err) {}
    }
    return (
        <EbooksContainer className="ebooks" size={size}>
            {ebooks.map((ebook, i) => (
                <Link key={i} className="ebook-details" href={`/${ebook._id}`}>
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
