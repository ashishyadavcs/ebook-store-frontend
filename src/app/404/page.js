"use client"
import Container from "@/components/Container";
import { Suspense } from "react";
import styled from "styled-components";

export default function Custom404() {
    return (
        <Suspense>
            <Pagestyle>
                <Container>
                    <h1>Page Not Found</h1>
                </Container>
            </Pagestyle>
        </Suspense>
    );
}
const Pagestyle = styled.section`
min-height: 85vh;
display: flex;
align-items: center;
text-align: center;
`;
