"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const EbookPageStyle = styled.section`
    .heading {
        text-align: center;
        margin: 100px auto 50px;
        ${media.sm} {
            margin: 0 0 30px;
            padding: 20px 0 0;
        }
    }
`;
export default EbookPageStyle;
