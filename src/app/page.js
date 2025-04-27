import { HomeStyles } from "@/styles/home.styled";
import EbookList from "@/components/ebook/EbookList";
import Search from "./components/Search";
import Container from "./components/ui/Container";
import FeaturedBook from "@/styles/featuredbook.styled";
import { useServerSideFetch } from "@/utils/ssr-api-call";
export default async function Home({ searchParams }) {
    let ebooks = [];
    const params = await searchParams;
    try {
        let url = `/api/ebooks`;
        if (params?.query?.length > 0) {
            url = `/api/ebooks?title=${params.query}`;
        } else {
            url = `/api/ebooks`;
        }
        const result = await useServerSideFetch(url, {
            next: {
                revalidate: 0,
            },
        });
        ebooks = result.data?.reverse() || [];
    } catch (err) {
        console.log(err);
    }

    return (
        <HomeStyles>
            <Container>
                <h1 className="gradient-text">Endless Stories, One Click Away!</h1>
                <Search searchQuery={params.query} />
            </Container>

            <Container>
                {ebooks.length > 0 ? (
                    <EbookList data={ebooks} />
                ) : (
                    <h2 className="text-center">No Ebook Found with this term ...</h2>
                )}
            </Container>
            <FeaturedBook>
                <Container>
                    <div className="left">
                        <h2>
                            All books are 50% off now!
                            <br /> Don't miss such a deal!
                        </h2>
                        <p>
                            Grab your favorite books at half the price!
                            <br /> 📚✨ Don't miss this limited-time 50% off deal
                            <br />
                            shop now and save big!
                        </p>
                    </div>
                    <img loading="lazy" src="/images/feature-book.svg" />
                </Container>
            </FeaturedBook>
        </HomeStyles>
    );
}
