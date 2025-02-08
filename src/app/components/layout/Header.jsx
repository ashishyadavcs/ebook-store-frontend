"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { navList } from "../../../../public/nav";
import { useAppSelector } from "@/state/hooks";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    const user = useAppSelector(state => state.user.data);
    const cart = useAppSelector(state => state.cart.data);
    return (
        <StyledHeader>
            <Container>
                <nav role="menubar">
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
                                link: user ? "/dashboard" : "/login",
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
                    </ul>

                    <button
                        onClick={e => e.currentTarget.parentElement.classList.toggle("active")}
                        className="menu-btn user"
                    >
                        {true ? (
                            <Image
                                layout="fill"
                                alt="user"
                                src={user?.image || "/images/logo.svg"}
                            />
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
