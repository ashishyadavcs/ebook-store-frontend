import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Sidebar from "@/components/layout/Sidebar";
import Logout from "@/components/dashboard/Logout";
import { VscVmActive } from "react-icons/vsc";
import { IoHome } from "react-icons/io5";

const Layout = async ({ children }) => {
    const links = [
        {
            text: "Home",
            icon: <IoHome size={20} />,
            url: "/",
        },
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
        {
            text: "Logged-in Devices",
            url: "/sessions",
            icon: <VscVmActive color="green" size={20} />,
        },
    ];
    return (
        <DashboardStyled className="dashboard-layout">
            <Sidebar>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link onClick={link.onClick} href={`/dashboard${link.url}`}>
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
