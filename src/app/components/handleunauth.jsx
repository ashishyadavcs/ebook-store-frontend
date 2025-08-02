"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Handle401() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const interceptFetch = async () => {
            const originalFetch = window.fetch;
            window.fetch = async (...args) => {
                const res = await originalFetch(...args);
                if (res.status === 401) {
                    router.push(`/login?from=${encodeURIComponent(pathname)}`);
                }
                return res;
            };
        };
        interceptFetch();
    }, [pathname]);

    return <></>;
}
