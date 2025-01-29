import Ebook from "./components/Ebook";
import { EbooksContainer } from "@/styles/ebooks.styled";
import { HomeStyles } from "@/styles/home.styled";
import Container from "./components/Container";
import config from "@/config/index.js";
import Link from "next/link";
export const revalidate = 3600;
export default async function Home() {
    let ebooks = [];
    try {
        const req = await fetch(`${config.APP_URL}/api/ebooks`);
        const { data } = await req.json();
        ebooks = [...data].reverse();
    } catch (err) {}
    return (
        <HomeStyles>
            <Container>
                <h1>Endless Stories, One Click Away!</h1>
                <EbooksContainer>
                    {ebooks.map(ebook => (
                        <Link className="ebook-details" href={`/${ebook._id}`}>
                            <Ebook key={ebook._id} data={ebook} />
                        </Link>
                    ))}
                </EbooksContainer>
            </Container>
        </HomeStyles>
    );
}
