"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Footerstyle = styled.footer`
    background: #fbfbff;

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
        background: rgb(243, 250, 255);
        border-top: 1px solid #f1f1f1;
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
