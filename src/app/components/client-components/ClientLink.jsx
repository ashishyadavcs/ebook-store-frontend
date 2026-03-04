"use client";
import Link from "next/link";
const ClientLink = ({ children, ...props }) => {
    return (
        <Link
            onClick={e => {
                document.querySelector(".sidebar")?.classList.remove("active");
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ClientLink;
