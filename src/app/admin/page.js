"use client";
import { useAppSelector } from "@/state/hooks";
import React from "react";

const Admin = () => {
    const user = useAppSelector(state => state.user.data);
    return (
        <div>
            <h1 className="text-center">
                Hi, <span className="gradient-text">{user?.name}</span>
                <br /> Welcome back to Admin dashboard
            </h1>
        </div>
    );
};

export default Admin;
