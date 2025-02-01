"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Dashboard = styled.section`
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }
    aside {
        background: #f1f1f1;
        width: 250px;
        ${media.sm} {
            background: linear-gradient(to right, #ddd, #fff, #ddd);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            width: calc(100% + 58px);
            position: sticky;
            top: 57px;
            z-index: 1;
            margin: 0 -40px;
            padding: 0 40px;
            font-weight: 600;
        }
        ul {
            list-style: none;
            position: sticky;
            top: 62px;
            z-index: 3;
            ${media.sm} {
                display: flex;
                overflow: auto;
                width: 100%;
                a {
                    min-width: max-content;
                    padding: 10px;
                }
            }
        }
        a {
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 10px 20px;
            color: #555;
            border-bottom: 1px solid #f1f1f1;
            &:hover {
                background: #ddd;
            }
        }
    }

    .main {
        flex: 1;
        padding: min(40px, 2vw) 0;
        width: 100%;
        .add-ebook {
            margin: 0 0 40px; //TODO - move in ebooks page
        }
        .add-ebook + h2 {
            text-align: center;
            margin: 0 0 20px;
        }
    }
`;

export default Dashboard;
