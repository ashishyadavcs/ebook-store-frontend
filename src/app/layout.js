import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StyledComponentsRegistry from "@/components/styledregistery";
import Config from "@/components/Config";
import { Suspense } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import Fallbackhtml from "@/components/Fallbackhtml";

export const metadata = {
    title: "Ebookstore",
    description: "Endless Stories, One Click Away!",
};
export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Suspense fallback={<Fallbackhtml />}>
                        <Header />
                        <Config />
                        <main role="main">{children}</main>
                        <Footer />
                        <Link
                            className="channel"
                            href="https://www.youtube.com/@frontendzonedotcom?sub_confirmation=1"
                        >
                            <FaYoutube color="red" />
                            channel
                        </Link>
                    </Suspense>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
