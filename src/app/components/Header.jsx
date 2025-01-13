"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "./Container";
import Button from "./Button";
import { logout } from "../actions/logout";

const Header = () => {
    const navList = [
        {
            link: "/",
            text: "home",
        },
        {
            link: "/ebooks",
            text: "ebooks",
        },
        {
            link: "/login",
            text: "login",
        },
    ];
    return (
        <StyledHeader>
            <Container>
                <nav>
                    <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
                    <ul className="links">
                        {navList.map((nav, i) => (
                            <li key={i}>
                                <Link href={nav.link}>{nav.text}</Link>
                            </li>
                        ))}
                        <li>
                            <Button onClick={logout}>logout</Button>
                        </li>
                    </ul>
                    <button
                        onClick={e => e.currentTarget.parentElement.classList.toggle("active")}
                        className="menu-btn"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
