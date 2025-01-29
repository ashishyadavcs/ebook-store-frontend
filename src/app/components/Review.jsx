"use client";
import styled, { css } from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { media } from "../../config/media";
import { toastify } from "./Toast";
import { useRouter } from "next/navigation";

const Review = ({ size, ebookid }) => {
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [review, setReview] = useState({
        rating: 5,
        review: "",
    });
    const setRating = async (e, rating) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        rating = offsetX < rect.width / 2 ? rating - 0.5 : rating;
        await setReview(v => ({ ...v, rating }));
    };
    const addClass = (rating, index) => {
        if (rating == index) {
            return "active";
        } else if (rating == index - 0.5) {
            return "active gradient";
        } else {
            return "";
        }
    };
    const addReview = async e => {
        e.preventDefault();
        setloading(true);
        try {
            const req = await fetch("/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rating: review.rating,
                    review: review.review,
                    ebook: ebookid,
                }),
            });
            if (!req.ok) {
                throw new Error("something went wrong");
            }
            if (req.redirected) {
                toastify.info("login to add review");
                router.push(`/login?from=${ebookid}`);
            }
            const result = await req.json();
            console.log(result);
            toastify.success("Thanks for rating");
            setloading(false);
        } catch (err) {
            toastify.error(err.statusText);
            setloading(false);
        }
    };
    return (
        <ReviewStyle size={size} className="review">
            <h3>Rate This Ebook</h3>
            <form onSubmit={addReview}>
                <div className="rating">
                    {[...Array(5)].map((s, i) => (
                        <span
                            key={i}
                            onMouseMove={e => setRating(e, i + 1)}
                            className={`star ${addClass(review.rating, i + 1)}`}
                        />
                    ))}
                </div>
                <textarea
                    value={review.review}
                    onChange={e => setReview(v => ({ ...v, review: e.target.value }))}
                    placeholder="your review"
                    className="textarea"
                />
                <Button loading={loading}>Rate Ebook</Button>
            </form>
        </ReviewStyle>
    );
};

export default Review;
const ReviewStyle = styled.div`
    width: min(400px, 100%);
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .rating {
        .star {
            margin: 0 2px;
            ${media.minsm} {
                &:hover {
                    transform: scale(1.5);
                    margin: 0 5px;
                }
            }
            --size: 10px;
            display: inline-block;
            ${({ size }) => css`
                --size: ${size}px;
            `}
            height:var(--size);
            width: var(--size);
            transition: all 0.3s;
            background: orangered;
            &.active {
                &.gradient {
                    background: linear-gradient(to right, orangered 50%, #ddd 50%);
                }
                ~ * {
                    background: #ddd;
                }
            }
            clip-path: polygon(
                50% 0%,
                61% 35%,
                98% 35%,
                68% 57%,
                79% 91%,
                50% 70%,
                21% 91%,
                32% 57%,
                2% 35%,
                39% 35%
            );
        }
    }
    form {
        display: flex;
        gap: 10px;
        flex-direction: column;
        textarea {
            border: 2px solid #ddd;
            padding: 10px;
        }
    }
`;
