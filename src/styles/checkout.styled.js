"use client";
import styled from "styled-components";
import { media } from "../config/media";

export const Checkoutstyle = styled.section`
    padding: 40px 0;
    .title {
        margin: 0 0 30px;
    }
    .container {
        display: flex;
        ${media.sm} {
            flex-direction: column-reverse;
        }
        gap: min(60px, 10vw);
        > * {
            flex: 1;
        }
    }
`;
