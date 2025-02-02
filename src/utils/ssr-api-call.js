import config from "@/config/index";
import { cookies } from "next/headers";
const cacheOption = {
    cache: "no-cache",
    next: {
        revalidate: 10,
    },
};
export const useServerSideFetch = async (url, option = cacheOption) => {
    const cookieStore = await cookies();
    const response = await fetch(`${config.APP_URL}${url}`, {
        headers: {
            Cookie: cookieStore.toString(),
        },
        ...option,
    });
    return await response.json();
};
