"use client";
import "nprogress/nprogress.css";
import { Toast } from "@/components/Toast";
import { Globalstyle } from "@/styles/global.styled";
import nProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
const Config = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        const handleStart = () => {
            nProgress.start();
        };
        const handleStop = () => {
            nProgress.done();
        };

        handleStop();

        return () => {
            handleStart();
        };
    }, [pathname, searchParams]);
    return (
        <Suspense>
            <Globalstyle />
            <Toast />
        </Suspense>
    );
};

export default Config;
