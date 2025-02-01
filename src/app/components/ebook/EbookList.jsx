import { EbooksContainer } from "@/styles/ebooks.styled";
import Ebook from "@/components/ebook/Ebook";
import config from "@/config/index";
import Link from "next/link";

const EbookList = async ({ data }) => {
    let ebooks = data;
    if (!ebooks) {
        // fetch ebooks if eboks dtaa not passed
        try {
            const req = await fetch(`${config.APP_URL}/api/ebooks`, { cache: "no-store" });
            const { data } = await req.json();
            ebooks = [...data].reverse();
        } catch (err) {}
    }
    return (
        <EbooksContainer>
            {ebooks.map((ebook, i) => (
                <Link key={i} scroll={true} className="ebook-details" href={`/${ebook._id}`}>
                    <Ebook
                        {...(i == 2 && { className: "trending" })}
                        key={ebook._id}
                        data={ebook}
                    />
                </Link>
            ))}
        </EbooksContainer>
    );
};

export default EbookList;
