"use client";
import Container from "@/components/ui/Container";
import { media } from "@/config/media";
import styled from "styled-components";
export const EbooksContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.size + "px"}, 1fr));
    ${media.sm} {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 1fr;
    }
    gap: 10px;
    a {
        color: inherit;
        .ebook {
            height: 100%;
        }
    }
`;
