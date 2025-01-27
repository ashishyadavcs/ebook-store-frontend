import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledComponentsRegistry from "./components/styledregistery";
import Config from "@/components/Config";
import { Suspense } from "react";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Config />
                    <Header />
                    <main role="main">
                        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
                    </main>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
