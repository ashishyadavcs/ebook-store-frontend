import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StyledComponentsRegistry from "@/components/styledregistery";
import Config from "@/components/Config";
import { Suspense } from "react";
import ReduxProvider from "./state/Provider";
import Breadcrumb from "./components/Breadcrumb";

export const viewport = {
    themeColor: "#ffffff",
};
export const metadata = {
    title: "🚀 Ebookstore",
    description: "Endless Stories, One Click Away!",
};
export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <StyledComponentsRegistry>
                        <Config />
                        <Header />
                        {children}
                        <Footer />
                    </StyledComponentsRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
