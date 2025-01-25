"use client";

import { useEffect, useState } from "react";
import Ebook from "./components/Ebook";
import { EbooksContainer } from "@/styles/ebooks.styled";
import { HomeStyles } from "@/styles/home.styled";
import Container from "./components/Container";
export default function Home() {
    const [ebooks, setebooks] = useState([]);
    useEffect(() => {
        (() => {
            fetch("/api/ebooks")
                .then(res => res.json())
                .then(data => {
                    setebooks(data.data);
                });
        })();
    }, []);

    return (
        <HomeStyles>
            <Container>
                <h1 className="gradient-text">Read Ebooks online</h1>
                <EbooksContainer>
                    {ebooks.map(ebook => (
                        <Ebook key={ebook._id} data={ebook} />
                    ))}
                </EbooksContainer>
            </Container>
        </HomeStyles>
    );
}
