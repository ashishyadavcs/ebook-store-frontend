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
        width: 250px;
        ${media.sm} {
            width: 100%;
            position: sticky;
            top: 57px;
            z-index: 1;
            font-weight: 600;
        }
        .page-list {
            list-style: none;
            position: sticky;
            top: 62px;
            z-index: 3;

            a {
                display: flex;
                gap: 5px;
                align-items: center;
                padding: 10px 20px;
                ${media.sm} {
                    padding: 14px;
                }
                color: #555;
                border-bottom: 1px solid #f1f1f1;
                margin: 0 0 10px;
                background: #fff;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                border-radius: 4px;
            }
        }
    }

    .main {
        flex: 1;
        padding: min(40px, 5vw) 0;
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
