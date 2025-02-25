"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useAppSelector } from "@/state/hooks";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import { constant } from "@/config/constant";

const Header = () => {
    const user = useAppSelector(state => state.user.data);
    const cart = useAppSelector(state => state.cart.data);
    const openSidebar = e => {
        document.querySelector(".sidebar")?.classList.toggle("active");
    };
    useEffect(() => {
        const menu = document.querySelector(".user");
        if (!menu) return;
        document.body.onclick = e => {
            if (e.target == document.querySelector(".user")) return;
            document.querySelector("aside.sidebar")?.classList.remove("active");
        };
    }, []);
    return (
        <StyledHeader>
            <Container>
                <nav className="menu">
                    <Link href="/" className="sitename">
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Link>
                    <ul className="links" role="menubar">
                        <li>
                            <Link
                                className={`cart ${cart.length == 0 ? "disabled" : ""}`}
                                href="/viewcart"
                            >
                                <FaCartPlus size={25} />
                                <span>{cart.length}</span>
                            </Link>
                        </li>

                        <li>
                            {user ? (
                                <Link
                                    href={user.role == "admin" ? "/admin" : "/dashboard"}
                                    className="user"
                                    onClick={openSidebar}
                                >
                                    <Image
                                        alt="user"
                                        height={40}
                                        width={40}
                                        src={user?.image || constant.default_user}
                                    />
                                </Link>
                            ) : (
                                <Link href="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
