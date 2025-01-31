"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";


const Header = () => {
    const navList = [
        {
            link: "/",
            text: "home",
        },
        {
            link: "/dashboard",
            text: "dashboard",
        },
        {
            link: "/login",
            text: "login",
        },
    ];
    return (
        <StyledHeader>
            <Container>
                <nav role="menubar">
                    <Link href="/" className="sitename">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
                    <ul className="links" role="menubar">
                        {navList.map((nav, i) => (
                            <li
                                onClick={e => {
                                    e.currentTarget.parentElement.parentElement.classList.remove(
                                        "active"
                                    );
                                }}
                                role="menuitem"
                                key={i}
                            >
                                <Link href={nav.link}>{nav.text}</Link>
                            </li>
                        ))}
                       
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
