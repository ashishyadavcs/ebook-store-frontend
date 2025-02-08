"use client";
import styled from "styled-components";
import { media } from "../config/media";

export const Checkoutstyle = styled.section`
    padding: 20px 0;
    .title {
        margin: 0 0 30px;
    }
    .container {
        display: flex;
        ${media.sm} {
            flex-direction: column-reverse;
        }
        gap: min(60px, 6vw);
        > * {
            flex: 1;
        }
        .form {
            background: #fff;
            padding: 20px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
    }
`;
