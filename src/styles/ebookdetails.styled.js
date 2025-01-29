"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Ebookdetails = styled.section`
    padding: 40px 0;
    .info {
        margin: 0 0 20px;
    }
    .review {
        margin: 20px 0;
    }
    .container {
        display: flex;
        .thumbnail {
            border-radius: 8px;
            overflow: hidden;
            background: #ddd;
            position: relative;
            height: 400px;
            width: max(300px, 100%);
            max-width: 100%;
            img {
                object-fit: cover;
                object-position: start;
            }
        }
        .author {
            margin: 5px 0 10px;
        }
        .info {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            gap:min( 50px,4vw);
            .btn {
                flex-shrink: 0;
            }
        }
        ${media.sm} {
            flex-direction: column;
        }
        gap: 40px;
    }
`;
export default Ebookdetails;
