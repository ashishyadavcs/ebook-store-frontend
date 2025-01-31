import Container from "@/components/ui/Container";
import Ebookdetail from "@/components/ebook/Ebookdetail";
import EbookList from "@/components/ebook/EbookList";
import EbookPageStyle from "@/styles/ebookpage.styled";
export const revalidate = 5000;

const Page = async ({ params }) => {
    const { slug: ebookid } = await params;
    return (
        <>
        <EbookPageStyle>
            <Ebookdetail id={ebookid} />
            <Container>
                <h2 className="title">You Might Also Like These!</h2>
            </Container>
           
        </EbookPageStyle>
         <EbookList />
        </>
    );
};

export default Page;

