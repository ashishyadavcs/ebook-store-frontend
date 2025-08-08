"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const ProfileStyle = styled.section`
    form {
        background: #fff;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        width: 100%;
    }
    .title {
        width: 100%;
        margin: 10px 0 40px;
    }
    .verify-btn {
        margin: 0 0 0 10px;
        font-size: 14px;
        font-weight: 400;
        padding: 2px 8px;
        border-radius: 4px;
        color: #f08f40ff;
        &.verified {
            color: lime;
        }
        border: 1px solid;
        cursor: pointer;
    }
`;
export default ProfileStyle;
