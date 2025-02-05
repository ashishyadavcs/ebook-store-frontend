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
        <li>
            <Link
                href=""
                onClick={async e => {
                    await logout();
                    dispatch(removeuser(null));
                    redirect("/login");
                }}
            >
                <MdLogout /> logout
            </Link>
        </li>
    );
};

export default Logout;
