"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function NProgressHandler() {
    const router = useRouter();
    const pathname = usePathname(); // current route

    useEffect(() => {
        const originalPush = router.push;
        const originalReplace = router.replace;

        // Override router.push
        router.push = (...args) => {
            const targetUrl = typeof args[0] === "string" ? args[0] : args[0]?.pathname;
            if (targetUrl && targetUrl !== pathname) {
                NProgress.start();
            }
            return originalPush.apply(router, args);
        };

        // Override router.replace
        router.replace = (...args) => {
            const targetUrl = typeof args[0] === "string" ? args[0] : args[0]?.pathname;
            if (targetUrl && targetUrl !== pathname) {
                NProgress.start();
            }
            return originalReplace.apply(router, args);
        };

        // Handle <a> clicks
        const handleLinkClick = e => {
            const anchor = e.target.closest("a");
            if (
                anchor &&
                anchor.href &&
                anchor.target !== "_blank" &&
                anchor.href.startsWith(window.location.origin)
            ) {
                const nextPath = new URL(anchor.href).pathname;
                if (nextPath !== window.location.pathname) {
                    NProgress.start();
                }
            }
        };

        // Popstate = back/forward button
        const handlePopState = () => {
            NProgress.start();
        };

        // Before unload (e.g., hard reload)
        const handleBeforeUnload = () => {
            NProgress.start();
        };

        window.addEventListener("click", handleLinkClick);
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            // Restore originals
            router.push = originalPush;
            router.replace = originalReplace;

            // Cleanup events
            window.removeEventListener("click", handleLinkClick);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [router, pathname]);

    // Stop progress bar when route (pathname) actually changes
    useEffect(() => {
        NProgress.done();
    }, [pathname]);

    return null;
}
