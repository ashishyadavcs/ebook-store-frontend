import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const PageLoader = () => {
    return (
        <PageLoaderStyle>
            <Spinner size={40} />
        </PageLoaderStyle>
    );
};

export default PageLoader;
const PageLoaderStyle = styled.div`
    z-index: 100;
    position: fixed;
    inset: 0 0 0 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;
