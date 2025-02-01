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
        overflow: hidden;
        ${media.sm} {
            margin: auto;
        }
        img {
            object-fit: cover;
        }
    }
    .title {
        width: 100%;
        margin: 10px 0 40px;
    }
`;
export default ProfileStyle;
