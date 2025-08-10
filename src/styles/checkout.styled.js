"use client";
import styled from "styled-components";
import { media } from "../config/media";
import { colors } from "@/config/constant";

export const Checkoutstyle = styled.section`
    padding: 20px 0;
    .title {
        margin: 0 0 10px;
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
            ${media.md} {
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
            ${media.md} {
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
    padding: 20px 0;
    .title {
        margin: 0 0 20px;
        ${media.sm} {
            text-align: center;
        }
    }
    .container {
        display: flex;
        ${media.sm} {
            flex-direction: column-reverse;
        }
        gap: min(60px, 6vw);
        > * {
            flex: 1;
        }
        .form {
            border-radius: 8px;
            background: #fff;
            padding: 20px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            ${media.minsm} {
                .btn {
                    width: max-content;
                }
            }
        }
    }
`;
