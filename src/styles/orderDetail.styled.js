"use client";
import styled from "styled-components";
import { media } from "@/config/media";

const OrderDetailStyle = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    h2 {
        margin-bottom: 1.5rem;
        color: #333;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-radius: 8px;
        overflow: hidden;
    }
    tr {
        overflow: auto;
    }

    th {
        text-align: left;
        padding: 12px;
        border-bottom: 1px solid #ddd;
        width: 35%;
        white-space: nowrap;
    }

    td {
        word-wrap: break-word;
        padding: 12px;
        border-bottom: 1px solid #ddd;
        max-width: 100%;
        ${media.sm} {
            max-width: 160px;
        }
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: bold;
        }
        .paid,
        .succeeded {
            color: green;
        }
        .pending {
            color: orange;
        }
        .failed {
            color: red;
        }
    }

    tr:last-child th,
    tr:last-child td {
        border-bottom: none;
    }

    ${media.sm} {
        margin: 1rem;

        th,
        td {
            padding: 8px;
        }
    }
`;

export default OrderDetailStyle;
