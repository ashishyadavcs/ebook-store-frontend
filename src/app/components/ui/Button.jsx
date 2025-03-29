"use client";
import Link from "next/link";
import React from "react";

const Button = props => {
    const {
        type = "",
        className = "",
        children,
        loading = false,
        replace = false,
        disabled = false,
        ...restprops
    } = props;
    if (!props.href)
        return (
            <button
                aria-label="button"
                disabled={disabled || loading}
                className={`btn ${className} ${type}`}
                {...restprops}
            >
                {loading && <span className="loader" />} {replace && loading ? "" : children}
            </button>
        );
    else
        return (
            <Link scroll={true} className={`btn ${className} ${type}`} {...restprops}>
                {children}
            </Link>
        );
};

export default Button;
