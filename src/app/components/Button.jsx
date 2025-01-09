"use client";
import Link from "next/link";
import React from "react";

const Button = props => {
    const { type = "button", children } = props;
    if (type == "button")
        return (
            <button className="btn" {...props}>
                {children}
            </button>
        );
    else
        return (
            <Link className="btn" {...props}>
                {children}
            </Link>
        );
};

export default Button;
