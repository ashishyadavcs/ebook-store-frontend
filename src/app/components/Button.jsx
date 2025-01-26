"use client";
import Link from "next/link";
import React from "react";

const Button = props => {
    const { type = "button", children, loading = false, ...restprops } = props;
    if (type == "button")
        return (
            <button className="btn" {...restprops}>
                {loading && <span className="loader" />} {children}
            </button>
        );
    else
        return (
            <Link className="btn" {...restprops}>
                {children}
            </Link>
        );
};

export default Button;
