"use client";
import { MdLogout } from "react-icons/md";
import { useAppDispatch } from "@/state/hooks";
import { removeuser } from "@/state/userslice";
import { redirect } from "next/navigation";
import Button from "../ui/Button";
import { useState } from "react";
import { toastify } from "../Toast";

const Logout = ({ size = 18 }) => {
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
            style={{ background: "#ffff", justifyContent: "flex-start" }}
        >
            <MdLogout size={size} /> logout
        </Button>
    );
};

export default Logout;
