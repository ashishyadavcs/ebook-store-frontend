import { HomeStyles } from "@/styles/home.styled";
import EbookList from "@/components/ebook/EbookList";
export default function Home() {
    return (
        <HomeStyles>
            <h1>Endless Stories, One Click Away!</h1>
            <EbookList />
        </HomeStyles>
    );
}
