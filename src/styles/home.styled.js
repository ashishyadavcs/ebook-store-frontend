"use client";
import { media } from "@/config/media";
import styled from "styled-components";
export const HomeStyles = styled.section`
    padding: 20px 0;
    h1 {
        margin: 20px auto;
        ${media.sm} {
            margin: 20px 50px 20px;
        }
        text-align: center;
    }
`;
