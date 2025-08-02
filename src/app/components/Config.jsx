"use client";
import "nprogress/nprogress.css";
import { Toast } from "@/components/Toast";
import { Globalstyle } from "@/styles/global.styled";
import nProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Handle401 from "./handleunauth";
const Config = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        nProgress.done();
        return () => {
            nProgress.start();
        };
    }, [pathname, searchParams]);
    return (
        <>
            <Globalstyle />
            <Toast />
            <Handle401 />
        </>
    );
};

export default Config;
