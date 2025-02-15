"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const SidebarStyles = styled.aside`
    background: #fff;
    max-height: 100vh;
    position: sticky;
    top: 60px;
    z-index: 11;
    ${media.minsm} {
        z-index: 9;
        box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.3);
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        a {
            color: inherit;
            font-weight: 600;
            padding: 18px calc(var(--container-width) / 2); //same as container
            border-bottom: 1px solid #f1f1f1;
            display: flex;
            gap: 8px;
            align-items: center;
            &:hover {
                background: #f1f1f1;
                font-weight: 600;
            }
            svg {
                flex-shrink: 0;
            }
        }
    }
`;
export default SidebarStyles;
