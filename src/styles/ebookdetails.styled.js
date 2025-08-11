"use client";
import { colors } from "@/config/constant";
import { media } from "@/config/media";
import styled from "styled-components";
const Ebookdetails = styled.div`
    background: #fff;
    padding: 40px 0;
    ${media.sm} {
        padding: 0 0 40px;
    }
    h1 {
        text-transform: capitalize;
    }

    .thumbnail {
        border-radius: 8px;
        overflow: hidden;
        background: #ddd;
        position: relative;
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
            line-height: 0;
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
    .desc {
        margin: 10px 0;
    }
    .details {
        flex: 1;
    }

    .ebook-review {
        margin: 30px auto 0;
        padding: 20px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        .reviews {
            list-style: none;
            li {
                border-radius: 8px;
                padding: 10px;
                width: max-content;
                margin: 10px 0 0;
            }
        }
    }

    .ebook-info {
        display: flex;
        .author {
            text-transform: capitalize;
            margin: 10px 10px 5px 0;
        }
        .price {
            margin: 10px 10px 10px 0;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 2rem;
        }
        .paid {
            color: green;
            background: #e6ffe6ff;
            border: 1px solid #9fbb9f5d;
            padding: 3px 10px;
            border-radius: 4px;
            font-size: 1rem;
        }
        .info {
            display: flex;
            flex-direction: column;
            gap: min(50px, 4vw);
            .btn {
                flex-shrink: 0;
                ${media.sm} {
                    flex-grow: 1;
                }
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
