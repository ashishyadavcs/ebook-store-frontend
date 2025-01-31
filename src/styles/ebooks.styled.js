"use client";
import { media } from "@/config/media";
import styled from "styled-components";
export const EbooksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: calc(100% - 10px);
    ${media.sm} {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 1fr;
    }
    gap: 10px;
    a {
        color: inherit;
    }
`;
