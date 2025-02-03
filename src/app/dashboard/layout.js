import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/logout";
import Sidebar from "./Sidebar";
import { ismobile } from "@/config/common";

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
        {
            text: "logout",
            onClick: logout,
            url: "",
            icon: <MdLogout />,
        },
    ];
    return (
        <DashboardStyled className="dashboard-layout">
            <Container>
                {!ismobile && <Sidebar />}
                <div className="main">{children}</div>
            </Container>
        </DashboardStyled>
    );
};

export default Layout;
