import config from "@/config/index.js";
export const getUser = async () => {
    try {
        const response = await fetch(`${config.APP_URL}/api/user`, { cache: "no-cache" });
        const data = await response.json();
        console.log({ data });
        return data;
    } catch (err) {
        return err;
    }
};
