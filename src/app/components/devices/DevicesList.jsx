"use client";
import { useState, useEffect } from "react";
import { DevicesStyle } from "@/styles/devices.styled";
import DeviceCard from "./DeviceCard";

const DevicesList = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        try {
            const response = await fetch("/api/user/devices", {
                credentials: "include",
            });
            const data = await response.json();

            if (response.ok) {
                setDevices(data.devices);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Failed to fetch devices");
        } finally {
            setLoading(false);
        }
    };

    const handleDeviceRevoke = async deviceId => {
        try {
            const response = await fetch(`/api/user/devices/${deviceId}`, {
                method: "DELETE",
                credentials: "include",
            });

            if (response.ok) {
                setDevices(devices.filter(device => device._id !== deviceId));
            }
        } catch (err) {
            console.error("Failed to revoke device:", err);
        }
    };

    const handleRevokeAll = async () => {
        try {
            const response = await fetch("/api/user/devices/revoke-all", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                // Keep only current device
                setDevices(devices.filter(device => device.isCurrent));
            }
        } catch (err) {
            console.error("Failed to revoke all devices:", err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <DevicesStyle>
            <div className="devices-header">
                <h2>Active Sessions</h2>
                <button onClick={handleRevokeAll} className="revoke-all-btn">
                    Revoke All Other Devices
                </button>
            </div>

            <div className="devices-grid">
                {devices.map(device => (
                    <DeviceCard key={device._id} device={device} onRevoke={handleDeviceRevoke} />
                ))}
            </div>
        </DevicesStyle>
    );
};

export default DevicesList;
