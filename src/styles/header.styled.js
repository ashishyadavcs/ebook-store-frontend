import styled from "styled-components";
import { media } from "../config/media";

const StyledHeader = styled.header`
    position: sticky;
    background: #fff;
    z-index: 10;
    top: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    .sitename {
        font-weight: 800;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            color: inherit;
        }
        img {
            border-radius: 50%;
        }
    }
    .links {
        display: flex;
        gap: 23px;
        ${media.minsm} {
            gap: 30px;
        }
        align-items: center;
        list-style: none;
        a {
            display: block;
            padding: 8px 0;
            &.cart {
                margin: 8px 0 0;
            }
        }
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
                    inset: auto auto 60% 48%;
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
`;

export default StyledHeader;
