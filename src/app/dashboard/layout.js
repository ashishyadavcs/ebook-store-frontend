import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Sidebar from "@/components/layout/Sidebar";
import Logout from "@/components/dashboard/Logout";
import { VscVmActive } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import ClientLink from "@/components/client-components/ClientLink";

const Layout = async ({ children }) => {
    const links = [
        {
            text: "Home",
            icon: <IoHomeOutline size={20} />,
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
            icon: <IoBookOutline size={20} />,
        },
        {
            text: "Orders",
            url: "/orders",
            icon: <MdPayment size={20} />,
        },
        {
            text: "Sessions",
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
                            <ClientLink href={`/dashboard${link.url}`}>
                                {link.icon}
                                {link.text}
                            </ClientLink>
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
