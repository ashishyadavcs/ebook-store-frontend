"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Layoutstyle = styled.div`
    .container {
        display: flex;
        gap: 40px;
        aside {
            position: sticky;
            max-height: max-content;
            top: 55px;
            width: 250px;
            min-height: 100vh;
            background: #f8f8f8;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            a {
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 10px;
                color: #000;
            }
            ${media.sm} {
                position: fixed;
                inset: auto auto 0 0;
                display: flex;
                min-height: auto;
                background: #fff;
                z-index: 100;
                width: 100%;
                justify-content: space-around;
                a {
                    padding: 15px 10px;
                    font-weight: 600;
                    flex: 1;
                    justify-content: center;
                    border-right: 1px solid #ddd;
                    color: var(--redpink);
                    svg {
                        --size: 20px;
                        height: var(--size);
                        width: var(--size);
                    }
                    span {
                        display: none;
                    }
                }
            }
        }
        .main {
            margin: 20px 0;
            flex: 1;
            ${media.sm} {
                width: 100%;
            }
        }
    }
`;
export default Layoutstyle;
