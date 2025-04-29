"use client";
import Container from "@/components/ui/Container";
import { Suspense } from "react";
import styled from "styled-components";
import Button from "./components/ui/Button";

export default function Custom404() {
    return (
        <Suspense>
            <Pagestyle>
                <Container>
                    <h1>Incorrect URL</h1>
                    <Button href="/" type="primary">
                        Go to Home
                    </Button>
                </Container>
            </Pagestyle>
        </Suspense>
    );
}
const Pagestyle = styled.section`
    min-height: 30vh;
    display: flex;
    align-items: center;
    text-align: center;
    h1 {
        margin: 0 0 20px;
    }
`;
