import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Logout from "@/components/dashboard/Logout";

const Sidebar = async ({ children }) => {
    const links = [
        {
            text: "Profile",
            url: "/profile",
            icon: <CgProfile size={20} />,
        },
        {
            text: "My Ebooks",
            url: "/ebooks",
            icon: <FaBook />,
        },
    ];
    return (
        <DashboardStyled>
            <aside role="sidebar">
                <ul className="page-list">
                    {links.map((a, i) => (
                        <li key={i}>
                            <Link
                                scroll={true}
                                {...{
                                    onClick: a.onClick,
                                    href: `/dashboard/${a.url}`,
                                }}
                            >
                                {a.icon}
                                {a.text}
                            </Link>
                        </li>
                    ))}
                    <Logout />
                </ul>
            </aside>
        </DashboardStyled>
    );
};

export default Sidebar;
