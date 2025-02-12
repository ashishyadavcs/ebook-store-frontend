"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useAppSelector } from "@/state/hooks";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";

const Header = () => {
    const user = useAppSelector(state => state.user.data);
    const cart = useAppSelector(state => state.cart.data);

    useEffect(() => {
        const menu = document.querySelector("nav.menu");
        if (!menu) return;
        document.body.onclick = e => {
            if (e.target == document.querySelector(".user")) return;
            if (!e.target.closest(".menu")) {
                menu.classList.remove("active");
            }
        };
    }, []);
    return (
        <StyledHeader>
            <Container>
                <nav role="menubar" className="menu">
                    <Link href="/" className="sitename">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Link>
                    <ul className="links" role="menubar">
                        {[
                            {
                                link: "/",
                                text: "home",
                            },
                            {
                                link: user
                                    ? user.role == "admin"
                                        ? "/admin"
                                        : "/dashboard"
                                    : "/login",
                                text: user ? "dashboard" : "login",
                            },
                        ].map((nav, i) => (
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
                        {user && (
                            <li
                                onClick={e => {
                                    e.currentTarget.parentElement.parentElement.classList.remove(
                                        "active"
                                    );
                                }}
                            >
                                <Link
                                    className={`cart ${cart.length == 0 ? "disabled" : ""}`}
                                    href="/viewcart"
                                >
                                    <FaCartPlus size={25} />
                                    <span>{cart.length}</span>
                                </Link>
                            </li>
                        )}
                    </ul>

                    <button
                        onClick={e => e.currentTarget.parentElement.classList.toggle("active")}
                        className={`menu-btn ${user ? "user" : ""}`}
                    >
                        {user ? (
                            <Image alt="user" layout="fill" src={user?.image} />
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
