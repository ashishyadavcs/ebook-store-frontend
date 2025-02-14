import config from "@/config/index";
import { cookies } from "next/headers";
const cacheOption = {
    next: {
        revalidate: 5,
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
        const result = await response.json();
        return result;
    } catch (err) {
        return [];
    }
};
