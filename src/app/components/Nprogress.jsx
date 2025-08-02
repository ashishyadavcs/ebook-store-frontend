"use client";

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function NProgressHandler() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const fullPath = pathname + "?" + searchParams.toString();

    useEffect(() => {
        const originalPush = router.push;
        const originalReplace = router.replace;

        // Override router.push
        router.push = (...args) => {
            const targetUrl =
                typeof args[0] === "string" ? args[0] : args[0]?.pathname + "?" + args[0]?.search;
            if (targetUrl && targetUrl !== fullPath) {
                NProgress.start();
            }
            return originalPush.apply(router, args);
        };

        // Override router.replace
        router.replace = (...args) => {
            const targetUrl =
                typeof args[0] === "string" ? args[0] : args[0]?.pathname + "?" + args[0]?.search;
            if (targetUrl && targetUrl !== fullPath) {
                NProgress.start();
            }
            return originalReplace.apply(router, args);
        };

        const handleLinkClick = e => {
            const anchor = e.target.closest("a");
            if (
                anchor &&
                anchor.href &&
                anchor.target !== "_blank" &&
                anchor.href.startsWith(window.location.origin)
            ) {
                const url = new URL(anchor.href);
                const nextFullPath = url.pathname + url.search;
                if (nextFullPath !== fullPath) {
                    NProgress.start();
                }
            }
        };

        const handleBeforeUnload = () => {
            NProgress.start();
        };

        window.addEventListener("click", handleLinkClick);
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            router.push = originalPush;
            router.replace = originalReplace;
            window.removeEventListener("click", handleLinkClick);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [router, pathname]);

    // Stop NProgress on any route (including query param) change
    useEffect(() => {
        NProgress.done();
    }, [pathname, searchParams]);

    return null;
}
