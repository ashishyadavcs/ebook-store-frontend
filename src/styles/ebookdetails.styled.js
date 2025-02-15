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
    .info {
        margin: 0 0 20px;
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
    .ebook-rating {
        margin: 10px 0;
        background: ${colors.green};
        color: #fff;
        border-radius: 4px;
        padding: 2px 6px;
        display: flex;
        width: max-content;
        gap: 5px;
        align-items: center;
        .star {
            display: inline-block;
            --size: 18px;
            height: var(--size);
            width: var(--size);
            background: #fff;
            clip-path: polygon(
                50% 0%,
                61% 35%,
                98% 35%,
                68% 57%,
                79% 91%,
                50% 70%,
                21% 91%,
                32% 57%,
                2% 35%,
                39% 35%
            );
        }
    }
    .ebook-review {
        margin: 30px auto 0;
        .reviews {
            list-style: none;
            li {
                display: flex;
                align-items: center;
                gap: 8px;
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
            display: inline-block;
            margin: 10px 0;
            &.paid {
                background: var(--success);
                color: #fff;
                padding: 3px 10px;
                border-radius: 100px;
                font-size: 1rem;
            }
        }
        .info {
            display: flex;
            flex-direction: column;
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
