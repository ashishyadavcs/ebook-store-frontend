/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com","images.unsplash.com"],
    },
    compiler: {
        styledComponents: true, // Enables built-in Styled Components support
    },
};

export default nextConfig;
