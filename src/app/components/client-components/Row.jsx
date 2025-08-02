"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Row = ({ children, pushTo }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(pushTo);
    };
    return (
        <tr style={{ cursor: "pointer" }} onClick={handleClick}>
            {children}
        </tr>
    );
};

export default Row;
