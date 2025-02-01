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
            width: 100%;
            position: sticky;
            top: 57px;
            z-index: 3;
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
        padding: 40px 0;
        width: 100%;
    }
`;

export default Dashboard;
