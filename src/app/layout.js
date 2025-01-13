import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledComponentsRegistry from "./components/styledregistery";
import Globalstyle from "@/styles/global";
import Container from "@/components/Container";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Globalstyle />
                    <Header />
                    <Container>{children}</Container>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
