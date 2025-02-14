import styled from "styled-components";
import { media } from "../config/media";

const StyledHeader = styled.header`
    position: sticky;
    background: #fff;
    z-index: 10;
    top: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    &::before {
        content: "";
        height: 100vh;
        width: 100%;
        display: inline-block;
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        left: 0;
        top: 55px;
        z-index: -1;
        opacity: 0;
        transition: all 0.3s;
        pointer-events: none;
    }
    &:has(.active)::before {
        opacity: 1;
        pointer-events: all;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        z-index: 2;
        top: 0;
        a,
        .menu-btn {
            overflow: hidden;
            background: transparent;
            color: inherit;
            font-weight: 600;
            padding: 18px 0;
            position: relative;

            ${media.minsm} {
                padding: 14px 0;
                &.sitename {
                    padding: 17px 0;
                }
                padding: 14px;
            }
        }
        .links {
            display: flex;
            align-items: center;
            list-style: none;
            .cart {
                &.disabled {
                    opacity: 0.5;
                    pointer-events: none;
                }
                position: relative;
                span {
                    position: absolute;
                    inset: auto auto 63% 64%;
                    ${media.sm} {
                        inset: auto auto 51% 18%;
                    }
                    display: inline-flex;
                    align-items: center;
                    place-content: center;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 1.4rem;
                    background: #02b47c;
                }
            }
        }
        .menu-btn {
            cursor: pointer;
            display: none;
        }
        ${media.sm} {
            .links {
                flex-direction: column;
                position: absolute;
                left: -100%;
                top: 100%;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                background: #fff;
                width: 250px;
                min-height: 100vh;
                transition: all 0.3s;
                li {
                    position: relative;
                    width: 100%;
                    &::before {
                        position: absolute;
                        content: "";
                        top: 100%;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(to right, #ddd, transparent);
                    }
                    a,
                    button {
                        display: block;
                        padding: 20px;
                        width: 100%;
                        text-align: left;
                    }
                }
            }
            .menu-btn {
                display: inline-flex;
                flex-direction: column;
                gap: 5px;
                width: 46px;
                padding: 19px 10px;
                height: 100%;
                background: transparent;
                &.user {
                    position: relative;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 40px;
                    width: 40px;
                    padding: 2px;
                    border-radius: 50%;
                    img {
                        object-fit: cover;
                    }
                }
                span {
                    display: block;
                    height: 2px;
                    width: 100%;
                    background: #000;
                    transition: all 0.3s;
                }
            }

            &.active {
                .menu-btn {
                    span {
                        &:nth-of-type(2) {
                            opacity: 0;
                            transform: translateX(10px);
                        }
                        &:first-child {
                            transform: rotate(45deg);
                            transform-origin: left;
                        }
                        &:last-child {
                            transform: translateY(5px) rotate(-45deg);
                            transform-origin: left;
                        }
                    }
                }
                .links {
                    left: 0;
                }
            }
        }
    }
`;

export default StyledHeader;
