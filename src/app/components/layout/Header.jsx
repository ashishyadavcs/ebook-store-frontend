"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import Image from "@/components/Image";
import { useAppSelector } from "@/state/hooks";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import { constant } from "@/config/constant";
import Button from "@/components/ui/Button";
import { ismobile } from "@/config/common";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
    const user = useAppSelector(state => state.user.data);
    const cart = useAppSelector(state => state.cart.data);
    const router = useRouter();
    const pathname = usePathname().toString();
    const openSidebar = e => {
        if (!ismobile() || (!pathname.includes("dashboard") && !pathname.includes("admin"))) {
            router.push(user.role == "admin" ? "/admin" : "/dashboard");
            return;
        }
        document.querySelector(".sidebar")?.classList.toggle("active");
    };
    useEffect(() => {
        const menu = document.querySelector(".user");
        if (!menu) return;
        document.body.onclick = e => {
            if (e.target == document.querySelector(".user")) return;
            document.querySelector("aside.sidebar")?.classList.remove("active");
        };
        window.onscroll = () => {
            document.querySelector("aside.sidebar")?.classList.remove("active");
        };
        return () => {
            document.body.onclick = null;
            window.onscroll = null;
        };
    }, []);
    return (
        <StyledHeader>
            <Container>
                <nav className="menu">
                    <Link href="/" className="sitename">
                        <Image alt="logo" height={40} width={40} src="/images/logo.svg" />
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Link>
                    <ul className="links" role="menubar">
                        <li>
                            <Link
                                className={`cart ${cart.length == 0 ? "hide-cart" : ""}`}
                                href="/viewcart"
                            >
                                <FaCartPlus size={25} />
                                <span>{cart.length}</span>
                            </Link>
                        </li>

                        <li>
                            {user ? (
                                <Button type="default" className="user" onClick={openSidebar}>
                                    <Image
                                        alt="user"
                                        height={40}
                                        width={40}
                                        src={user?.image || constant.default_user}
                                    />
                                    <span className="name"> {user.name.split(" ")[0]}</span>
                                </Button>
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
