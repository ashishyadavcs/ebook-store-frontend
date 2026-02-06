import React from "react";
import styled from "styled-components";
import Spinner from "@/components/loaders/Spinner";

const EbookActionSkeleton = () => {
    return (
        <EbookBtnStyle className="ebook-btn">
            <Spinner color="#888" /> checking access...
        </EbookBtnStyle>
    );
};

export default EbookActionSkeleton;
const EbookBtnStyle = styled.div`
    width: min(100%, 300px);
    height: 40px;
    background: #f0f0f0;
    border-radius: 5px;
    text-align: center;
    display: flex;
    gap: 7px;
    font-weight: 600;
    color: #ccc;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    --loader-background-color: #eeeeee;
    --loader-highlight-color: #dedede;
    background: linear-gradient(
        90deg,
        var(--loader-background-color) 25%,
        var(--loader-highlight-color) 50%,
        var(--loader-background-color) 75%
    );
    background-size: 200% 100%;
    animation: loading 2s infinite ease-in-out;

    @keyframes loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;
