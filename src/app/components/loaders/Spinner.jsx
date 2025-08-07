import React from "react";
import styled from "styled-components";

const Spinner = ({ size = 18 }) => {
    return <SpinnerStyle size={size} />;
};

export default Spinner;
const SpinnerStyle = styled.span`
    display: inline-block;
    border: 2px solid #f3f3f3;
    border-top: 2px solid transparent;
    border-radius: 50%;
    --size: ${({ size }) => size + "px"};
    width: var(--size);
    height: var(--size);
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
