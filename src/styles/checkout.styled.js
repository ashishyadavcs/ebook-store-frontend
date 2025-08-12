"use client";
import styled from "styled-components";
import { media } from "../config/media";
import { colors } from "@/config/constant";

export const Checkoutstyle = styled.section`
    padding: 20px 0;
    .title {
        margin: 0 0 5px;
    }
    .sub-title {
        font: 600 18px/1.5 sans-serif;
    }
    .payment-ui {
        margin: 30px auto 0;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 30px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
            width: 100%;
            ${media.minsm} {
                width: calc(70% - 30px);
            }
            .method {
                flex: 1;
                cursor: pointer;
                margin: 20px 0 0;
                input {
                    display: none;
                }
                input:disabled + label {
                    opacity: 0.5;
                    cursor: not-allowed;
                    pointer-events: none;
                }
                input:checked + label {
                    border: 2px solid ${colors.redpink};
                    .checked {
                        opacity: 1;
                    }
                }
                label {
                    cursor: pointer;
                    padding: 20px;
                    border-radius: 8px;
                    border: 2px solid #ddd;
                    display: block;
                    .checked {
                        float: right;
                        opacity: 0;
                    }
                    .method-item {
                        display: flex;
                        padding: 0 0 10px;
                        border-bottom: 1px solid #f1f1f1;
                        gap: 10px;
                        svg {
                            margin: 2px 0 0;
                        }
                        p {
                            margin: 5px 0 0;
                        }
                    }
                    .more {
                        padding: 10px 0;
                        .tags {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                            list-style: none;
                            li {
                                background: #e7f4f6ff;
                                padding: 5px 10px;
                                border-radius: 5px;
                                font-size: 12px;
                            }
                        }
                        p {
                            margin: 10px 0 0;
                            display: flex;
                            align-items: center;
                            gap: 5px;
                        }
                    }
                }
            }
            .secure {
                border: 1px solid;
                background-image: linear-gradient(to right, #f3fff7ff, #cbefffff);
                color: #008236;
                padding: 20px;
                border-radius: 8px;
                display: flex;
                gap: 10px;
                margin: 20px 0;
                svg {
                    flex-shrink: 0;
                }
                h3 {
                    color: #0d542b;
                }
            }
        }
        .order-summary {
            width: 100%;
            ${media.minsm} {
                width: 30%;
            }
            position: sticky;
            top: 80px;
            height: max-content;
        }
        .form {
            border-radius: 8px;
            background: #fff;
            padding: 20px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            width: 100%;
            .sub-title {
                margin: 0 0 20px;
            }
            ${media.minsm} {
                .btn {
                    width: max-content;
                }
            }
        }
    }
    .order-summary {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ddd;
        h3 {
            margin: 0 0 20px;
        }
        .security {
            padding: 10px 0 0;
            color: #888;
            border-top: 1px solid #f1f1f1;
            list-style: none;
            display: flex;
            gap: 15px;
            font-size: 10px;
            justify-content: center;
            align-items: center;
            li {
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }
        .prices li {
            &.savings {
                color: green;
            }
            padding: 5px 0;
            display: flex;
            justify-content: space-between;
            &:last-child {
                border-top: 1px solid #ddd;
                span {
                    color: ${colors.redpink};
                }
            }
            span {
                font-weight: 700;
            }
        }
        .btn {
            margin: 30px 0 10px;
            width: 100%;
        }
    }
`;

export const ViewcartStyles = styled.div`
    padding: 16px 0;
    min-height: 50vh;

    .heading {
        font: 600 24px/1.2 sans-serif;
        color: #2d3748;
        margin: 0 0 16px 0;
    }

    .loading-placeholder {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading-pulse 1.5s infinite;
        border-radius: 8px;
        height: 100px;
        margin-bottom: 16px;

        @keyframes loading-pulse {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
    }

    .cart-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        will-change: transform; /* Performance hint for browser */

        @supports (grid-template-columns: 1fr) {
            ${media.md} {
                grid-template-columns: minmax(0, 1fr) 30%;
            }
        }

        .cart-items {
            min-width: 0;
        }

        .price-details {
            position: sticky;
            top: 80px;
        }
    }

    .cart-items {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .cart-header {
        padding: 15px 16px;
        font: 600 16px/1.4 sans-serif;
        border-bottom: 1px solid #edf2f7;
        background: #f8fafc;
        color: #2d3748;
    }

    .cart-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 16px;
        padding: 16px;
        border-bottom: 1px solid #edf2f7;

        ${media.sm} {
            grid-template-columns: auto minmax(0, 1fr);
            grid-template-areas:
                "image info"
                "price price";
            gap: clamp(8px, 2vw, 16px);
        }

        &:last-child {
            border-bottom: none;
        }
    }

    .item-image {
        width: 100px;
        height: 150px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

        ${media.sm} {
            width: 80px;
            height: 120px;
            grid-area: image;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .placeholder-image {
            width: 100%;
            height: 100%;
            background: #f0f0f0;
        }
    }

    .item-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        ${media.sm} {
            grid-area: info;
        }

        h3 {
            margin: 0;
            font: 600 clamp(16px, 3vw, 18px) / 1.3 sans-serif;
            color: #2d3748;
        }
        .author {
            color: #4a5568;
            font: 400 14px/1.4 sans-serif;
            margin: 0;
        }

        .quantity-controls {
            display: inline-flex;
            place-items: center;
            gap: 8px;
            margin: 8px 0 0 0;
            padding: 4px;
            border-radius: 20px;

            .quantity-btn.btn {
                aspect-ratio: 1;
                width: 28px;
                padding: 0;
                border: none;
                border-radius: 50%;
                background: #fff;
                color: #4a5568;
                font-size: 16px;
                display: grid;
                place-items: center;
                box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease;

                &:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
                }
            }

            .quantity {
                font: 500 14px/1.4 sans-serif;
                min-width: 20px;
                text-align: center;
            }
        }
    }

    .item-price {
        text-align: right;

        ${media.sm} {
            grid-area: price;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #edf2f7;
            padding: clamp(8px, 2vw, 16px) 0 0 0;
            margin: 8px 0 0 0;
        }

        .current {
            font: 600 18px/1.2 sans-serif;
            color: #2d3748;
            margin: 0 0 8px 0;

            ${media.sm} {
                margin: 0;
            }
        }

        .original {
            font: 400 14px/1.4 sans-serif;
            color: #718096;
            text-decoration: line-through;
            margin: 0 0 8px 0;

            ${media.sm} {
                margin: 0 8px 0 0;
                order: -1;
            }
        }

        .remove-btn.btn {
            aspect-ratio: 1;
            width: 32px;
            padding: 0;
            background: #f1f1f1;
            border-radius: 50%;
            color: #e53e3e;
            display: grid;
            place-items: center;
            transition: 0.2s ease;

            &:hover {
                background: #fed7d7;
                transform: scale(1.05);
            }

            ${media.sm} {
                margin: 0 0 0 auto;
            }
        }
    }

    .price-card {
        background: #fff;
        border-radius: 10px;
        padding: 24px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 80px;

        h2 {
            margin: 0 0 24px 0;
            font-size: 18px;
            color: #2d3748;
            padding: 0 0 16px 0;
            border-bottom: 1px solid #edf2f7;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                color: #4a5568;
                font-size: 14px;

                &.discount {
                    color: #38a169;
                }

                &.total {
                    font-weight: 600;
                    font-size: 16px;
                    color: #2d3748;
                    border-top: 1px dashed #edf2f7;
                    margin: 8px 0 0 0;
                    padding: 16px 0 0 0;
                }
            }
        }

        .actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 24px 0 0 0;

            .checkout-btn,
            .continue-btn {
                width: 100%;
            }
        }
    }

    .empty-cart {
        text-align: center;
        padding: 24px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin: 24px auto;
        max-width: 500px;
        animation: fadeIn 0.5s ease-in-out;

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .empty-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto 24px;
            background: url("/images/empty-cart.svg") center/contain no-repeat;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }

        h2 {
            font-size: 24px;
            color: #2d3748;
            margin: 0 0 8px 0;
        }

        p {
            color: #718096;
            margin: 0 0 24px 0;
        }
    }
`;
