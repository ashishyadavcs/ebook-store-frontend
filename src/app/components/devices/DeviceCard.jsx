"use client";
import { DeviceCardStyle } from "@/styles/devices.styled";
import Button from "../ui/Button";

const DeviceCard = ({ device, onRevoke }) => {
    const getDeviceIcon = userAgent => {
        if (userAgent.includes("Mobile")) return "📱";
        if (userAgent.includes("Chrome")) return "🌐";
        if (userAgent.includes("Safari")) return "🧭";
        if (userAgent.includes("Firefox")) return "🦊";
        return "💻";
    };

    const formatDate = date => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <DeviceCardStyle>
            <div className="device-header">
                <span className="device-icon">{getDeviceIcon(device.userAgent)}</span>
                <div className="device-info">
                    <h3>{device.deviceName || "Unknown Device"}</h3>
                    <p className="location">{device.ip}</p>
                </div>
                {device.isCurrent && <span className="current-badge">Current</span>}
            </div>

            <div className="device-details">
                <p>
                    <strong>Last Active:</strong> {formatDate(device.createdAt)}
                </p>
                <p>
                    <strong>Expires:</strong> {formatDate(device.expiresAt)}
                </p>
                <p className="user-agent">{device.userAgent}</p>
            </div>

            {!device.isCurrent && (
                <Button onClick={() => onRevoke(device._id)} className="revoke-btn">
                    Revoke Access
                </Button>
            )}
        </DeviceCardStyle>
    );
};

export default DeviceCard;
