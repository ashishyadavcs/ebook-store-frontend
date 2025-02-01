"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const EbookPageStyle = styled.section`
    .heading {
        text-align: center;
        margin: 0 0 30px;
        ${media.minsm} {
            margin: 100px auto 50px;
        }
    }
`;
export default EbookPageStyle;
