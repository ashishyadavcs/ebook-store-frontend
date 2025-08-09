"use client";
import styled from "styled-components";
import { media } from "../config/media";
const AuthStyle = styled.section`
    background: #fff;
    overflow: hidden;
    border-radius: 20px;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    ${media.sm} {
        border-radius: 8px;
        padding: 20px;
        img {
            display: none;
        }
        flex-direction: column;
    }
    ${media.minsm} {
        img {
            width: 50%;
            height: 100%;
        }
        gap: 40px;
        form {
            width: 50%;
            padding: 0 40px 0 0;
        }
    }
    ${media.md} {
        width: 70%;
    }
    ${media.xxl} {
        width: 50%;
    }
    .or {
        display: block;
        margin: 20px auto;
        padding: 0 10px;
        position: relative;
        background: #fff;
        &::before {
            content: "";
            z-index: -1;
            position: absolute;
            display: block;
            height: 2px;
            width: max(200px, 100%);
            background: #ddd;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .already {
        text-align: center;
        margin: 10px 0 0;
    }
    .title {
        margin: 0 0 20px;
        text-align: center;
    }
`;
export default AuthStyle;
