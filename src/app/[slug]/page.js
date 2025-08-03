import Container from "@/components/ui/Container";
import Ebookdetail from "@/components/ebook/Ebookdetail";
import EbookList from "@/components/ebook/EbookList";
import EbookPageStyle from "@/styles/ebookpage.styled";
import { Suspense } from "react";
import Details from "@/components/loaders/detail";
import { useServerSideFetch } from "@/utils/ssr-api-call";
export const dynamic = "force-static"; // or auto
export const revalidate = 20; // optional ISR
export async function generateMetadata({ params }) {
    const { slug: ebookid } = await params;
    return {
        title: `Ebook Details - ${ebookid} | Ebook Store`,
        description: `Read details, reviews, and purchase options for the ebook "${ebookid}" at Ebook Store.`,
        keywords: ["ebook", "book details", "buy ebook", "read online", "ebook store"],
    };
}
export async function generateStaticParams() {
    let slugs = [];
    try {
        const result = await useServerSideFetch("/api/ebooks");
        slugs = result.data.reverse();
    } catch (err) {}
    return slugs.map(ebook => ({ slug: ebook._id }));
}

const Page = async ({ params }) => {
    const { slug: ebookid } = await params;
    return (
        <>
            <EbookPageStyle>
                <Suspense fallback={<Details />}>
                    <Ebookdetail id={ebookid} />
                </Suspense>
                <Container>
                    <h2 className="heading">You Might Also Like These!</h2>
                    <Suspense fallback="loading...">
                        <EbookList id={ebookid} />
                    </Suspense>
                </Container>
            </EbookPageStyle>
        </>
    );
};

export default Page;
