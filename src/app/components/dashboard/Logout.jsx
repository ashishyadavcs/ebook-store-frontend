"use client";
import { MdLogout } from "react-icons/md";
import { useAppDispatch } from "@/state/hooks";
import { removeuser } from "@/state/userslice";
import { redirect } from "next/navigation";
import Button from "../ui/Button";
import { useState } from "react";
import { toastify } from "../Toast";

const Logout = ({ size = 20 }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const logoutOutUser = async () => {
        setLoading(true);
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        setLoading(false);
        if (!res.ok) {
            toastify.error("logout failed");
            return;
        }
        dispatch(removeuser(null));
        toastify.success("logged out successfully");
        redirect("/login");
    };
    return (
        <Button
            href="#"
            loading={loading}
            onClick={logoutOutUser}
            onMouseOver={e => {
                e.currentTarget.style.background = "#f0f0f0";
            }}
            onMouseOut={e => {
                e.currentTarget.style.background = "#ffff";
            }}
            style={{
                background: "#ffff",
                justifyContent: "flex-start",
                borderRadius: "0",
                boxShadow: "none",
            }}
        >
            <MdLogout size={size} /> logout
        </Button>
    );
};

export default Logout;
