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
        }
    }
    .title {
        width: 100%;
        margin: 10px 0 40px;
    }
`;
export default ProfileStyle;
