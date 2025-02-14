"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Dashboard = styled.main`
    display: flex;
    flex-wrap: wrap;
    --sidebarwidth: 18vw;
    .sidebar {
        width: var(--sidebarwidth);
        ${media.sm} {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
        }
    }
    .route {
        width: calc(100% - var(--sidebarwidth));
        padding: 30px calc(var(--container-width) / 2) 40px;
        border-left: 1px solid #ddd;
        flex: 1;
        .title {
            margin: 0 0 20px;
        }
    }
`;

export default Dashboard;
