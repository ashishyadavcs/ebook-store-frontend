import styled from "styled-components";
import { media } from "../config/media";

const StyledHeader = styled.header`
    position: sticky;
    background: #fff;
    z-index: 10;
    top: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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
                background: #000;
                width: 250px;
                min-height: 100vh;
                transition: all 0.3s;
                li {
                    position: relative;
                    width: 100%;
                    padding: 0 0 0 30px;
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
                        color: #fff;
                        display: block;
                        padding: 20px;
                        width: 100%;
                        text-align: left;
                    }
                }
            }
            .menu-btn {
                display: inline-block;
                height: 30px;
                width: 30px;
                background: transparent;
                &.user {
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 50px;
                    width: 50px;
                    border: 2px solid #ddd;
                    padding: 2px;
                    border-radius: 50%;
                }
                span {
                    display: block;
                    height: 2px;
                    background: #000;
                    margin-bottom: 5px;
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
                            transform: translateY(7px) rotate(-45deg);
                            transform-origin: left;
                        }
                    }
                }
                .links {
                    left: -30px;
                }
            }
        }
    }
`;

export default StyledHeader;
