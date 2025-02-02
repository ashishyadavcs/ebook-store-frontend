"use client";
import Container from "@/components/ui/Container";
import { media } from "@/config/media";
import styled from "styled-components";

const Loader = () => {
    return (
        <Container>
            <LoadingCSS>
                {[...Array(10)].map((b, i) => (
                    <div key={i} className="box" />
                ))}
            </LoadingCSS>
        </Container>
    );
};

export default Loader;
const LoadingCSS = styled.div`
    padding: 20px 0;
    display: grid;
    --gap: 20px;
    gap: var(--gap);
    width: calc(100% - var(--gap));
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    ${media.sm} {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 1fr;
    }
    .box {
        border-radius: 10px;
        height: 300px;
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
    }
`;
