"use client";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { logout } from "../../actions/logout";
import { useAppDispatch } from "@/state/hooks";
import { removeuser } from "@/state/userslice";
import { redirect } from "next/navigation";

const Logout = () => {
    const dispatch = useAppDispatch();
    return (
        <Link
            href="#"
            onClick={async e => {
                dispatch(removeuser(null));
                await logout();
                redirect("/login");
            }}
        >
            <MdLogout /> logout
        </Link>
    );
};

export default Logout;
