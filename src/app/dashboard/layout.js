import React from "react";
import DashboardStyled from "@/styles/dashboard.styled";
import Container from "@/components/Container";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { logout } from "../actions/logout";

const Layout = ({ children }) => {
    const links = [
        {
            text: "Profile",
            url: "/profile",
            icon: <CgProfile />,
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
        <DashboardStyled>
            <Container>
                <aside role="sidebar">
                    <ul>
                        {links.map(a => (
                            <li>
                                <Link
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
                    </ul>
                </aside>

                <main>{children}</main>
            </Container>
        </DashboardStyled>
    );
};

export default Layout;
