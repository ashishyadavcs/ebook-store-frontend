import { useServerSideFetch } from "@/utils/ssr-api-call";
import config from "../config";

export default async function sitemap() {
    const staticPages = [
        { url: `${config.APP_URL}/`, lastModified: new Date() },
        { url: `${config.APP_URL}/contact`, lastModified: new Date() },
    ];
    let ebooks = [];
    try {
        const result = await useServerSideFetch("/api/ebooks");
        ebooks = result.data.reverse();
    } catch (err) {
        ebooks = [];
    }
    const dynamicPages = [...ebooks].map(ebook => ({
        url: `${config.APP_URL}/ebooks/${ebook._id}`,
    }));
    return [...dynamicPages, ...staticPages];
}
