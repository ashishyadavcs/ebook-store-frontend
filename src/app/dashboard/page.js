import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Sidebar from "./Sidebar";

const Layout = async ({ children }) => {
    return (
        <DashboardStyled>
            <Sidebar />
        </DashboardStyled>
    );
};

export default Layout;
