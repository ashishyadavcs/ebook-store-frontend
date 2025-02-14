"use client";
import Link from "next/link";
import StyledHeader from "@/styles/header.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useAppSelector } from "@/state/hooks";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    const user = useAppSelector(state => state.user.data);
    const cart = useAppSelector(state => state.cart.data);
    const openSidebar = e => {
        e.preventDefault();
        document.querySelector(".sidebar").classList.toggle("active");
    };
    return (
        <StyledHeader>
            <Container>
                <nav role="menubar" className="menu">
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
                        {!user && (
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                        )}
                        <li>
                            {user && (
                                <Link href="/dashboard" onClick={openSidebar}>
                                    <Image alt="user" height={40} width={40} src={user?.image} />
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
