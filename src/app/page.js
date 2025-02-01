import { HomeStyles } from "@/styles/home.styled";
import EbookList from "@/components/ebook/EbookList";
import Search from "./components/Search";
import Container from "./components/ui/Container";
export default function Home() {
    return (
        <HomeStyles>
            <h1>Endless Stories, One Click Away!</h1>
            <Container>
                <Search />
            </Container>
            <EbookList />
        </HomeStyles>
    );
}
