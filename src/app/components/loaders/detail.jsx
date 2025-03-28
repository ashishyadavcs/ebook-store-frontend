"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px;
`;

const SkeletonBox = styled.div`
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

const ShimmerEffect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonImage = styled(SkeletonBox)`
    width: 200px;
    height: 300px;
`;

const SkeletonDetails = styled.div`
    flex: 1;
`;

const SkeletonTitle = styled(SkeletonBox)`
    width: 60%;
    height: 20px;
    margin-bottom: 10px;
`;

const SkeletonText = styled(SkeletonBox)`
    width: 90%;
    height: 15px;
    margin-bottom: 8px;
`;

const SkeletonButton = styled(SkeletonBox)`
    width: 120px;
    height: 40px;
    margin-top: 15px;
`;

const SkeletonRating = styled(SkeletonBox)`
    width: 180px;
    height: 20px;
    margin-top: 15px;
`;

const Details = () => {
    return (
        <SkeletonContainer>
            <SkeletonImage>
                <ShimmerEffect />
            </SkeletonImage>
            <SkeletonDetails>
                <SkeletonTitle>
                    <ShimmerEffect />
                </SkeletonTitle>
                <SkeletonText>
                    <ShimmerEffect />
                </SkeletonText>
                <SkeletonText>
                    <ShimmerEffect />
                </SkeletonText>
                <SkeletonButton>
                    <ShimmerEffect />
                </SkeletonButton>
                <SkeletonRating>
                    <ShimmerEffect />
                </SkeletonRating>
            </SkeletonDetails>
        </SkeletonContainer>
    );
};

export default Details;
