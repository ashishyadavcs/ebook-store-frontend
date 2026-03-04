"use client";
import { useRouter } from "nextjs-toploader/app";
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
