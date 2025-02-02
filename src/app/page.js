"use client";
import { HomeStyles } from "@/styles/home.styled";
import EbookList from "@/components/ebook/EbookList";
import Search from "./components/Search";
import Container from "./components/ui/Container";
import NewReleaseEbook from "./components/ebook/NewReleaseEbook";
import styled from "styled-components";
import { media } from "@/config/media";
export default function Home() {
    return (
        <HomeStyles>
            <Container>
                <h1>Endless Stories, One Click Away!</h1>
                <Search />
            </Container>

            <Container>
                <EbookList />
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
                    <img src="/images/feature-book.svg" />
                </Container>
            </FeaturedBook>
        </HomeStyles>
    );
}

const FeaturedBook = styled.section`
    margin: 60px 0;
    background: pink;
    h2 {
        font-size: 4rem;
    }
    p {
        margin: 10px 0 20px;
        font-size: 2rem;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 0;
        ${media.sm} {
            justify-content: center;
            br {
                display: none;
            }
        }
    }
`;
