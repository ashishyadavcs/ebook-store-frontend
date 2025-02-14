"use client";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { logout } from "../../actions/logout";
import { useAppDispatch } from "@/state/hooks";
import { removeuser } from "@/state/userslice";
import { redirect } from "next/navigation";

const Logout = ({ size = 15 }) => {
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
            <MdLogout size={size} /> logout
        </Link>
    );
};

export default Logout;
