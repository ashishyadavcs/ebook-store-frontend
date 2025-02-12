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
            white-space: nowrap;
            padding: 10px;
            ${media.sm} {
                &:first-child {
                    background: #fff;
                    position: sticky;
                    left: 0;
                }
            }
        }
        tr {
            border-top: 1px solid #ddd;
        }
    }
`;
export default TableStyle;
