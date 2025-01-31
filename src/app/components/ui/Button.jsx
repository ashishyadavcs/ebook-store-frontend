"use client";
import Link from "next/link";
import React from "react";

const Button = props => {
    const { type = "button", className, children, loading = false, ...restprops } = props;
    if (!props.href)
        return (
            <button disabled={loading} className={`btn ${className}`} {...restprops}>
                {loading && <span className="loader" />} {children}
            </button>
        );
    else
        return (
            <Link className={`btn ${className}`} {...restprops}>
                {children}
            </Link>
        );
};

export default Button;
