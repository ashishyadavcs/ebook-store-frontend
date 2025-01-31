"use client";
import styled from "styled-components";
import { constant } from "../../config/constant";
import Image from "next/image";
const Ebook = ({ data }) => {
    const { title, author, coverImageUrl = constant.image } = data;
  
    return (
        <Ebookstyle className="ebook">
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
    .btn-group {
        display: flex;
        gap: 10px;
    }
    .rating {
        margin: 10px 0;
        gap: 4px;
        display: inline-flex;
        span{
            padding: 2px 6px;
        background: #1bb91b;
        color: #fff;
        }
    }
    del {
        opacity: 0.5;
    }
    .title {
        font-size: 1.8rem;
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
    }
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
