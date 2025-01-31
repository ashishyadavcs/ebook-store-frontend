"use client";
import styled from "styled-components";
import Button from "./components/Button";
import Container from "./components/Container";
export default function GlobalError({ error, reset }) {
    return (
        <Errorstyle>
            <Container className="text-center">
                <h1>Application Error</h1>
                <p>{error.message}</p>
                <Button onClick={reset}>Try Again</Button>
            </Container>
        </Errorstyle>
    );
}

const Errorstyle = styled.section`
    min-height: 86vh;
    display: flex;
    align-items: center;
    p {
        margin: 5px 0 10px;
    }
`;
