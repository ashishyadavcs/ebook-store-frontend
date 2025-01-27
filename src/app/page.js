import Ebook from "./components/Ebook";
import { EbooksContainer } from "@/styles/ebooks.styled";
import { HomeStyles } from "@/styles/home.styled";
import Container from "./components/Container";
export default async function Home() {
    const req = await fetch("http://localhost:3000/api/ebooks");
    const {data:ebooks} = await req.json();
    return (
        <HomeStyles>
            <Container>
                <h1>Read Ebooks online</h1>
                <EbooksContainer>
                    {[...ebooks].map(ebook => (
                        <Ebook key={ebook._id} data={ebook} />
                    ))}
                </EbooksContainer>
            </Container>
        </HomeStyles>
    );
}
