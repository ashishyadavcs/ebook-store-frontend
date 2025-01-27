import Ebook from "./components/Ebook";
import { EbooksContainer } from "@/styles/ebooks.styled";
import { HomeStyles } from "@/styles/home.styled";
import Container from "./components/Container";
import config from "@/config/index.js";
export default async function Home() {
    let ebooks = [];
    try {
        const req = await fetch(`${config.APP_URL}/api/ebooks`, {
            cache: "no-store",
        });
        const { data } = await req.json();
        ebooks = [...data];
    } catch (err) {}
    return (
        <HomeStyles>
            <Container>
                <h1>Read Ebooks online</h1>
                <EbooksContainer>
                    {ebooks.map(ebook => (
                        <Ebook key={ebook._id} data={ebook} />
                    ))}
                </EbooksContainer>
            </Container>
        </HomeStyles>
    );
}
