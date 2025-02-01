import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StyledComponentsRegistry from "@/components/styledregistery";
import Config from "@/components/Config";
import { Suspense } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import Fallbackhtml from "@/components/Fallbackhtml";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Suspense loading={<Fallbackhtml />}>
                    <StyledComponentsRegistry>
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
                    </StyledComponentsRegistry>
                </Suspense>
            </body>
        </html>
    );
}
