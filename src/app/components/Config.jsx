"use client";
import { Toast } from "@/components/Toast";
import { Globalstyle } from "@/styles/global.styled";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Handle401 from "@/components/Handle401";
const Config = () => {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Globalstyle />
            <Toast />
            <Handle401 />
        </>
    );
};

export default Config;
