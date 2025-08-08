"use client";
import React from "react";
import styled, { css } from "styled-components";

const Rating = ({ value, size = 20, number = false }) => {
    const addClass = (rating, index) => {
        if (rating == index) {
            return "active";
        } else if (rating == index - 0.5) {
            return "active gradient";
        } else {
            return "";
        }
    };
    return (
        <RatingStyle size={size} className="rating">
            <div className="stars">
                {[...Array(5)].map((s, i) => (
                    <span key={i} className={`star ${addClass(value, i + 1)}`} />
                ))}
            </div>
            {number && (
                <span className="tag">{Number.isInteger(value) ? `${value}.0` : value}</span>
            )}
        </RatingStyle>
    );
};

export default Rating;
const RatingStyle = styled.div`
    display: flex;
    margin: 10px 0;
    align-items: center;
    gap: 10px;
    .tag {
        color: green;
        background: #e6ffe6ff;
        border: 1px solid #9fbb9f5d;
        padding: 3px 10px;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 600;
    }
    .star {
        margin: 0 2px;
        --size: 20px;
        display: inline-block;
        ${({ size }) => css`
            --size: ${size}px;
        `}
        height:var(--size);
        width: var(--size);
        transition: all 0.3s;
        background: #f0cb42;
        &.active {
            &.gradient {
                background: linear-gradient(to right, #f0cb42 50%, #ddd 50%);
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
`;
