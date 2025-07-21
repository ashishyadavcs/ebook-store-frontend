import { media } from "@/config/media";
import styled from "styled-components";

export const DevicesStyle = styled.div`
    padding: 20px 0;

    .devices-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        h2 {
            margin: 0;
            color: #333;
            font-size: clamp(1.5rem, 2vw, 2rem);
        }

        .revoke-all-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background: #c82333;
            }
        }
    }

    .devices-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        ${media.sm} {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
        gap: 20px;
    }
`;

export const DeviceCardStyle = styled.div`
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .device-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .device-icon {
            font-size: 24px;
            margin-right: 15px;
        }

        .device-info {
            flex: 1;

            h3 {
                margin: 0;
                font-size: 16px;
                color: #333;
            }

            .location {
                margin: 5px 0 0 0;
                color: #666;
                font-size: 14px;
            }
        }

        .current-badge {
            background: #28a745;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
    }

    .device-details {
        margin-bottom: 15px;

        p {
            margin: 5px 0;
            font-size: 14px;
            color: #666;
            word-wrap: break-word;
        }

        .user-agent {
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .revoke-btn {
        background: #dc3545;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            background: #c82333;
        }
    }
`;
