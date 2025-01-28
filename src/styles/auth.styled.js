"use client";
import styled from "styled-components";
import { media } from "../config/media";
const AuthStyle = styled.section`
    overflow: hidden;
    border-radius: 20px;
    padding: 10px 0;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.sm} {
        img {
            display: none;
        }
        flex-direction: column;
    }
    ${media.minsm} {
        width: 50%;
        img {
            width: 50%;
            height: 100%;
        }
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        gap: 40px;
        form {
            padding: 0 40px 0 0;
        }
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
