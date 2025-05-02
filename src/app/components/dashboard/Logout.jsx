"use client";
import { MdLogout } from "react-icons/md";
import { logout } from "../../actions/logout";
import { useAppDispatch } from "@/state/hooks";
import { removeuser } from "@/state/userslice";
import { redirect } from "next/navigation";
import Button from "../ui/Button";
import { useState } from "react";

const Logout = ({ size = 15 }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    return (
        <Button
            href="#"
            loading={loading}
            onClick={async e => {
                setLoading(true);
                await logout();
                dispatch(removeuser(null));
                redirect("/login");
            }}
            style={{ background: "#ffff", justifyContent: "flex-start" }}
        >
            <MdLogout size={size} /> logout
        </Button>
    );
};

export default Logout;
