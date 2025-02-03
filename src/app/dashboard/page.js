import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Layout = async ({ children }) => {
    return (
        <DashboardStyled>
            <Sidebar />
        </DashboardStyled>
    );
};

export default Layout;
