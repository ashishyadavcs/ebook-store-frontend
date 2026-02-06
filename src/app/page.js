import { HomeStyles } from "@/styles/home.styled";
import dynamicImport from "next/dynamic";
import Container from "./components/ui/Container";
import { useServerSideFetch } from "@/utils/ssr-api-call";
export const dynamic = "auto";
export const revalidate = 60;
const Search = dynamicImport(() => import("./components/Search"), {
    loading: () => <div style={{ minHeight: 40 }} />,
});
const EbookList = dynamicImport(() => import("@/components/ebook/EbookList"), {
    loading: () => <div style={{ minHeight: 300 }} />,
});
import FeaturedBook from "@/styles/featuredbook.styled";
import Image from "@/components/Image";
export default async function Home({ searchParams }) {
    let ebooks = [];
    let options = {};
    const params = await searchParams;
    try {
        let url = `/api/ebooks`;
        if (params?.query?.length > 0) {
            url = `/api/ebooks?title=${params.query}`;
            options = {
                cache: "no-store",
            };
        } else {
            url = `/api/ebooks`;
            options = {
                cache: "force-cache",
                revalidate: 60,
            };
        }

        const result = await useServerSideFetch(url, options);
        ebooks = result.data?.reverse() || [];
    } catch (err) {}

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
                    <Image
                        layout="fixed"
                        width={300}
                        height={200}
                        loading="lazy"
                        src="/images/feature-book.svg"
                    />
                </Container>
            </FeaturedBook>
        </HomeStyles>
    );
}
