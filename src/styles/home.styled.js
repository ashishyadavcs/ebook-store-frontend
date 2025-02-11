"use client";
import { media } from "@/config/media";
import styled from "styled-components";
export const HomeStyles = styled.section`
    padding: 1px 0 0;
    h1 {
        margin: 40px auto;
        font-size: clamp(2rem, 8vw, 4rem);
        line-height: 1.3;
        ${media.sm} {
            margin: 20px 30px 20px;
        }
        text-align: center;
    }
`;
