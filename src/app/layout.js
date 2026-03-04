import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StyledComponentsRegistry from "@/components/styledregistery";
import Config from "@/components/Config";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import ReduxProvider from "./state/Provider";

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
                <NextTopLoader color="rgb(250, 0, 133)" height={5} showSpinner={true} />
                <ReduxProvider>
                    <StyledComponentsRegistry>
                        <Suspense>
                            <Config />
                            <Header />
                            {children}
                            <Footer />
                        </Suspense>
                    </StyledComponentsRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
