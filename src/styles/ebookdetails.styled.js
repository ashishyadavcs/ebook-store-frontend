"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Ebookdetails = styled.div`
    background: #fff;
    padding: 40px 0;
    ${media.sm} {
        padding: 0 0 40px;
    }
    .info {
        margin: 0 0 20px;
    }
    .review {
        margin: 20px 0;
    }
    .thumbnail {
        border-radius: 8px;
        overflow: hidden;
        background: #ddd;
        position: relative;
        height: 400px;
        width: 300px;
        max-width: 100%;
        img {
            object-fit: contain;
        }
        ${media.minsm} {
            &.mobile {
                display: none;
            }
        }
        ${media.sm} {
            width: 100%;
            height: fit-content;
            border-radius: 0;
            display: inline-block;
            img {
                width: 100%;
                height: auto;
                max-height: 400px;
            }
            &:not(.mobile) {
                display: none;
            }
        }
    }
    .container {
        display: flex;
        .author {
            margin: 5px 0 10px;
        }
        .info {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            align-items: flex-end;
            gap: min(50px, 4vw);
            .btn {
                flex-shrink: 0;
            }
        }
        ${media.sm} {
            flex-direction: column;
            .details {
                padding: 20px 0 0;
            }
        }
        gap: 40px;
    }
`;
export default Ebookdetails;
