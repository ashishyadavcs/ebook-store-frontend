"use client";
import { media } from "@/config/media";
import styled from "styled-components";
const Dashboard = styled.main`
    display: flex;
    flex-wrap: wrap;
    --sidebarwidth: 18vw;
    .sidebar {
        width: var(--sidebarwidth);
        transition: all 0.3s cubic-bezier(1, 0, 0, 0.41);
        ${media.sm} {
            position: fixed;
            width: 70%;
            left: -100%;
            &.active {
                left: 0;
            }
            bottom: 0;
        }
    }
    .route {
        width: calc(100% - var(--sidebarwidth));
        padding: 30px calc(var(--container-width) / 2) 40px;
        ${media.sm} {
            padding: 20px calc(var(--container-width) / 2) 20px;
        }
        flex: 1;
        .title {
            margin: 0 0 20px;
        }
    }
`;

export default Dashboard;
