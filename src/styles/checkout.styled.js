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
        font-weight: 600;
        font-size: 18px;
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
        font-size: 24px;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 16px;
    }

    /* Layout styles */
    .cart-content {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 24px;
        .cart-items {
            flex-grow: 1;
        }
        .price-details {
            position: sticky;
            top: 80px;
            width: 100%;
            ${media.md} {
                width: 30%;
            }
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
        font-weight: 600;
        border-bottom: 1px solid #edf2f7;
        background: #f8fafc;
        color: #2d3748;
        font-size: 16px;
    }

    .cart-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 16px;
        padding: 16px;
        border-bottom: 1px solid #edf2f7;

        ${media.sm} {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr auto;
            gap: 8px;
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
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        ${media.sm} {
            width: 80px;
            height: 120px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .placeholder-image {
            width: 100%;
            height: 100%;
            background-color: #f0f0f0;
        }
    }

    .item-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #2d3748;
        }

        .author {
            color: #4a5568;
            font-size: 14px;
            margin: 0;
        }

        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;

            .quantity-btn {
                width: 28px !important;
                height: 28px !important;
                border-radius: 50% !important;
                border: 1px solid #edf2f7 !important;
                background: #fff !important;
                font-size: 16px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                color: #4a5568 !important;
                padding: 0 !important;
                min-width: unset !important;
                box-shadow: none !important;
            }

            .quantity {
                font-size: 14px;
                width: 20px;
                text-align: center;
            }
        }
    }

    .item-price {
        text-align: right;

        ${media.sm} {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #edf2f7;
            padding-top: 16px;
        }

        .current {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 8px;

            ${media.sm} {
                margin: 0;
            }
        }

        .original {
            font-size: 14px;
            color: #718096;
            text-decoration: line-through;
            margin-bottom: 8px;

            ${media.sm} {
                margin: 0 8px 0 0;
                order: -1;
            }
        }

        .remove-btn {
            background: #f1f1f1 !important;
            border: none !important;
            color: #e53e3e !important;
            font-size: 18px !important;
            cursor: pointer !important;
            padding: 8px !important;
            border-radius: 50% !important;
            width: 32px !important;
            height: 32px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: background-color 0.2s ease !important;
            box-shadow: none !important;
            min-width: unset !important;
            &:hover {
                background-color: #fed7d7 !important;
            }

            ${media.sm} {
                margin-left: auto !important;
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
            padding-bottom: 16px;
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
                    margin-top: 8px;
                    padding-top: 16px;
                }
            }
        }

        .actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 24px;

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

        .empty-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto 24px;
            background-image: url("/images/empty-cart.svg");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        h2 {
            font-size: 24px;
            color: #2d3748;
            margin-bottom: 8px;
        }

        p {
            color: #718096;
            margin-bottom: 24px;
        }
    }
`;
