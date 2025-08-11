"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const TableStyle = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 100%;
    overflow: auto;
    img {
        object-fit: cover;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        th {
            color: #888;
        }
        td,
        th {
            text-align: left;
            padding: 10px;
        }
        tr {
            border-top: 1px solid #ddd;
            &:hover {
                background: #f1f1f1;
            }
        }
        thead {
            background: #fff;
        }
        tbody {
            height: 100%;
            overflow: auto;
        }
    }
`;
export default TableStyle;
