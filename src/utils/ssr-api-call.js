import config from "@/config/index";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
const cacheOption = {
    next: {
        revalidate: 10,
    },
};
export const useServerSideFetch = async (url, option = cacheOption) => {
    try {
        const cookieStore = await cookies();
        const response = await fetch(`${config.APP_URL}${url}`, {
            headers: {
                Cookie: cookieStore.toString(),
            },
            ...option,
        });
        if (response.status === 401) {
            const currentURL = headers().get("referer") || "/";
            return redirect(`/login?from=${encodeURIComponent(currentURL)}`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        return null;
    }
};
