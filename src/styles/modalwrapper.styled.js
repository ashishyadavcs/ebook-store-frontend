"use client";
import { media } from "@/config/media";
import styled from "styled-components";

const ModalWrapperStyle = styled.div`
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-content {
        width: min(${props => props.size}px, 96%);
        position: relative;
    }
    .close-btn {
        font-size: 26px;
        line-height: 1;
        color: #ccc;
        padding: 10px;
        position: absolute;
        inset: 0 10px auto auto;
        ${media.sm} {
            inset: -3px 5px auto auto;
        }
    }
`;

export default ModalWrapperStyle;
