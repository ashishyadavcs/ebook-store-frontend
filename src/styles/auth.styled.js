"use client";
import styled from "styled-components";
import { media } from "../config/media";
const AuthStyle = styled.div`
    margin: 60px auto;
    padding: 60px;
    color: red;
    ${media.sm} {
        padding: 20px;
    }
    width: min(400px, 90%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    .title {
        margin: 0 0 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        label {
            display: flex;
            width: 100%;
            align-items: center;
            input {
                flex: 1;
            }
        }
        input {
            border: 2px solid #ddd;
            &:focus {
                border-color: blue;
            }
        }
    }
`;
export default AuthStyle;
