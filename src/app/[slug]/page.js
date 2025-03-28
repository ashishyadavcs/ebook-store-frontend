import Container from "@/components/ui/Container";
import Ebookdetail from "@/components/ebook/Ebookdetail";
import EbookList from "@/components/ebook/EbookList";
import EbookPageStyle from "@/styles/ebookpage.styled";
import { Suspense } from "react";
import Details from "@/components/loaders/detail";

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
                        <EbookList />
                    </Suspense>
                </Container>
            </EbookPageStyle>
        </>
    );
};

export default Page;
