"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Footerstyle = styled.footer`
    padding: 40px 0;
    background: url("/images/gradient-black-bg.avif");
    background-size: 100% 100%;
    background-blend-mode: multiply;
    &,
    a {
        color: #f1f1f1;
    }
    .main {
        padding: 20px 0;
        display: grid;
        gap: 40px;
        grid-template-columns: 30% 30% calc(40% - 2 * 40px);
        .news {
            img {
                border-radius: 4px;
            }
            display: flex;
            gap: 10px;
            margin: 0 0 10px;
            p {
                margin: 5px 0;
                font-size: 1.3rem;
            }
            span {
                font-size: 1.2rem;
            }
        }
        ${media.sm} {
            grid-template-columns: auto;
            gap: 20px;
        }
        h3 {
            margin: 0 0 min(10px, 3vw);
        }
        ul {
            list-style: none;
        }
    }
    .company {
        a {
            text-transform: capitalize;
        }
    }
    .sub-footer {
        align-items: center;
        margin: 10px auto 0;
        opacity: 0.5;
        border-top: 1px solid rgba(241, 241, 241, 0.42);
        .container {
            display: flex;
            padding: 10px 0;
            justify-content: space-between;
        }
        ${media.sm} {
            font-size: 1.2rem;
        }
    }
`;
export default Footerstyle;
