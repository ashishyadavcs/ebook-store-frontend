import config from "../config";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/dashboard", "/dashboard/*", "/admin", "/admin/*"],
            },
        ],
        sitemap: `${config.APP_URL}/sitemap.xml`,
    };
}
