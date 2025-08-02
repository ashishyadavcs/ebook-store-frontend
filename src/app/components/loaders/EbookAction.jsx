import React from "react";
import styled from "styled-components";

const EbookActionSkeleton = () => {
    return <EbookBtnStyle className="ebook-btn"></EbookBtnStyle>;
};

export default EbookActionSkeleton;
const EbookBtnStyle = styled.div`
    width: min(100%, 300px);
    height: 40px;
    background: #f0f0f0;
    border-radius: 5px;
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
