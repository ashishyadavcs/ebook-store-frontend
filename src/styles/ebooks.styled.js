"use client";
import { media } from "@/config/media";
import styled from "styled-components";
export const EbooksContainer = styled.div`
    display: grid;
    --gap: 30px;
    gap: var(--gap);
    grid-template-columns: repeat(auto-fill, minmax(${props => props.size + "px"}, 1fr));
    ${media.sm} {
        --gap: 10px;
        grid-template-columns: 50% 50%;
        grid-auto-rows: 1fr;
        width: calc(100% - var(--gap));
    }
    a {
        color: inherit;
        .ebook {
            height: 100%;
            transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
            img {
                height: 250px;
                ${media.sm} {
                    height: 180px;
                }
            }
            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        }
    }
`;
