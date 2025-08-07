"use client";
import Link from "next/link";
import React from "react";
import Spinner from "../loaders/Spinner";
import Buttonstyle from "@/styles/Button.styled";

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
                {loading && <Spinner size={18} />} {replace && loading ? "" : children}
            </button>
        );
    else
        return (
            <Link scroll={true} className={`btn ${className} ${type}`} {...restprops}>
                {children} {loading && <Spinner size={18} />}
            </Link>
        );
};

export default Buttonstyle(Button);
