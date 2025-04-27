"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const FeaturedBook = styled.section`
    margin: 60px 0 0;
    background: linear-gradient(0deg, var(--redpink) 5%, var(--lightblue));
    h2 {
        font-size: clamp(2rem, 8vw, 4rem);
    }
    p {
        margin: 10px 0 20px;
    }
    .container {
        display: flex;
        justify-content: space-around;
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
export default FeaturedBook;
