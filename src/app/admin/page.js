"use client";
import useUserStore from "@/state/stores/userStore";
import React from "react";

const Admin = () => {
    const { user } = useUserStore();
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
