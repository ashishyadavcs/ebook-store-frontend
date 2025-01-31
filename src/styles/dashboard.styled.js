"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Dashboard = styled.section`
    aside {
        background: #f1f1f1;
        position: sticky;
        top: 62px;
        width: 250px;
        ${media.sm}{
            width: 100%;
        }
        ul {
            list-style: none;
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

    .container {
        display: flex;
        flex-wrap: wrap;
        main {
            padding: 40px 0;
            flex: 1;
            width: 100%;
        }
    }
`;

export default Dashboard;
