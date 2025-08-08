"use client";
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
        font-size: 20px;
        padding: 10px;
        position: absolute;
        inset: 0 0 auto auto;
    }
`;

export default ModalWrapperStyle;
