"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const ProfileStyle = styled.section`
    .image {
        position: relative;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: #ddd;
        cursor: pointer;
        .icon {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            background: var(--lightblue);
            position: absolute;
            bottom: 9px;
            right: -5px;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            z-index: 2;
        }
        ${media.sm} {
            margin: auto;
        }
        img {
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
    }
    form {
        background: #fff;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
    }
    .title {
        width: 100%;
        margin: 10px 0 40px;
    }
`;
export default ProfileStyle;
