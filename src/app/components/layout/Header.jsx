"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import { FaCartPlus } from "react-icons/fa6";
import Image from "next/image";

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
        {
            link: "/checkout",
            icon: <FaCartPlus size={25} />,
        },
    ];
    return (
        <StyledHeader>
            <Container>
                <nav role="menubar">
                    <Link href="/" className="sitename">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Link>
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
                                <Link href={nav.link}>{nav.text || nav.icon}</Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={e => e.currentTarget.parentElement.classList.toggle("active")}
                        className="menu-btn user"
                    >
                        {true ? (
                            <Image alt="user" height={40} width={40} src={"/images/logo.svg"} />
                        ) : (
                            <>
                                <span></span>
                                <span></span>
                                <span></span>
                            </>
                        )}
                    </button>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
