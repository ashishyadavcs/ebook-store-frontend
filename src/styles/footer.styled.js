"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Footerstyle = styled.footer`
    background: #fbfbff;
    &,
    a {
        color: #888;
    }
    padding: 20px 0;
    .main {
        display: grid;
        gap: 40px;
        grid-template-columns: 30% 30% calc(40% - 2 * 40px);
        .news {
            display: flex;
            gap: 10px;
            margin: 0 0 10px;
            p {
                margin: 5px 0;
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
            margin: 0 0 min(20px, 3vw);
        }
        ul {
            list-style: none;
        }
    }
    .sub-footer {
        align-items: center;
        margin: 10px auto 0;
        padding: 10px 0 0;
        border-top: 1px solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        ${media.sm} {
            font-size: 1.2rem;
        }
    }
`;
export default Footerstyle;
