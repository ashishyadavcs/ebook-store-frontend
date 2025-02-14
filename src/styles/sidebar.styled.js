"use client";
import styled from "styled-components";
const SidebarStyles = styled.aside`
    background: #fff;
    max-height: 100vh;
    position: sticky;
    top: 55px;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        a {
            color: inherit;
            padding: 10px calc(var(--container-width) / 2); //same as container
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
