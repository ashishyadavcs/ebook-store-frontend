"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Layoutstyle = styled.div`
    height: calc(100vh - 65px);
    margin: 30px 0;
    .container {
        height: 100%;
        display: flex;
        gap: 40px;
        --asidewidth: min(200px, 15vw);
        aside {
            ${media.minsm} {
                border-radius: 8px;
                padding: 10px;
            }
            nav {
                height: 100%;
                display: flex;
                ${media.minsm} {
                    flex-direction: column;
                }
                a {
                    width: 100%;
                    &:last-child {
                        margin: auto 0 0;
                    }
                    ${media.minsm} {
                        border-radius: 8px;
                    }
                }
            }

            position: sticky;
            top: 0;
            background: #fff;

            width: var(--asidewidth);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            a {
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 10px;
                color: #000;

                &:hover {
                    background: #f1f1f1;
                }
            }
            ${media.sm} {
                position: fixed;
                inset: auto auto 0 0;
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
            height: 100%;
            padding: 4px;

            width: 100%;
            ${media.minsm} {
                overflow: auto;
                width: calc(100% - var(--asidewidth));
            }
            flex: 1;
        }
    }
`;
export default Layoutstyle;
