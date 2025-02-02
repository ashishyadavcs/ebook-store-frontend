"use client";
import { media } from "@/config/media";
import styled from "styled-components";
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
export default FeaturedBook;
