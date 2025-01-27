"use client";
import styled from "styled-components";
import { constant } from "../../config/constant";
import Review from "@/components/Review";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
const Ebook = ({ data }) => {
    const [showReview, setshowReview] = useState(false);
    const { _id, title, author, coverImageUrl = constant.image } = data;
    return (
        <Ebookstyle className="ebook">
            <Image alt="ebook" height={400} width={400} src={coverImageUrl} />
            <h2 className="title">{title}</h2>
            <p className="description">{author}</p>
            <div className="btn-group">
                <Button type="link" href="/checkout">
                    add to cart
                </Button>
                <Button onClick={e => setshowReview(v => !v)}>rate ebook</Button>
            </div>
            {showReview && <Review handler={setshowReview} ebookid={_id} size={30} />}
        </Ebookstyle>
    );
};

export default Ebook;
const Ebookstyle = styled.div`
    .btn-group {
        display: flex;
        gap: 10px;
    }
    .title {
        font-size: 1.8rem;
        margin: 1rem 0 0;
    }
    .description {
        margin: 1rem 0 1rem;
    }
    img {
        max-width: 100%;
        object-fit: cover;
    }
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
