"use client";
import styled from "styled-components";
import { constant } from "@/config/constant";
import Image from "next/image";
import { media } from "@/config/media";
const Ebook = ({ data, className }) => {
    const { title, author, coverImageUrl = constant.image } = data;

    return (
        <Ebookstyle className={`ebook ${className}`}>
            <Image alt="ebook" height={400} width={400} src={coverImageUrl} />
            <h2 className="title">{title}</h2>
            <p className="description">{author}</p>
            <p className="rating">
                <span>4.5</span>(1023)
            </p>
            <p>
                <del>&#8377;100</del> &#8377;60 <strong className="off">40% off</strong>
            </p>
        </Ebookstyle>
    );
};

export default Ebook;
const Ebookstyle = styled.div`
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    .btn-group {
        display: flex;
        gap: 10px;
    }
    &.trending {
        position: relative;
        @keyframes wave {
            100% {
                background-position: 100% 0;
            }
        }
        &::before {
            content: "trending";
            position: absolute;
            top: 15px;
            right: 15px;
            border-radius: 2px;
            padding: 2px 8px;
            font-size: 12px;
            background: linear-gradient(90deg, #06c050 30%, #fff 5px, #06c050 50%);
            background-size: 300%;
            color: #fff;
            animation: wave 1s linear infinite forwards;
        }
    }
    .rating {
        margin: 10px 0;
        gap: 4px;
        display: inline-flex;
        align-items: center;
        span {
            padding: 2px 6px;
            background: #1bb91b;
            color: #fff;
        }
    }
    del {
        opacity: 0.5;
    }
    .title {
        font-size: clamp(1.2rem, 4vw, 1.8rem);
        margin: 1rem 0 0;
    }
    .description {
        margin: 1rem 0 1rem;
    }
    .off {
        color: #1bb91b;
    }
    img {
        max-width: 100%;
        object-fit: cover;
        ${media.sm} {
            height: 150px;
        }
    }
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
