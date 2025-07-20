"use client";
import { useState, useEffect } from "react";
import { DevicesStyle } from "@/styles/devices.styled";
import DeviceCard from "./DeviceCard";
import Button from "../ui/Button";
import Loader from "../loaders/Loader";

const DevicesList = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        try {
            const response = await fetch("/api/devices", {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
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
            const response = await fetch(`/api/devices/${deviceId}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
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
            const response = await fetch("/api/devices/revoke-all", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // Keep only current device
                setDevices(devices.filter(device => device.isCurrent));
            }
        } catch (err) {
            console.error("Failed to revoke all devices:", err);
        }
    };

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;

    return (
        <DevicesStyle>
            <div className="devices-header">
                <h2>Active Sessions</h2>
                <Button onClick={handleRevokeAll} className="revoke-all-btn">
                    Revoke All Other Devices
                </Button>
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
