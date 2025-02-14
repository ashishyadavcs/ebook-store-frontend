import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/logout";
import Sidebar from "@/components/layout/Sidebar";
import Logout from "@/components/dashboard/Logout";

const Layout = async ({ children }) => {
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
        <DashboardStyled className="dashboard-layout">
            <Sidebar>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link onClick={link.onClick} href={`/dashboard/${link.url}`}>
                                {link.icon}
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    <Logout />
                </ul>
            </Sidebar>
            <div className="route">{children}</div>
        </DashboardStyled>
    );
};

export default Layout;
