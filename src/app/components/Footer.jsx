"use client"
import Footerstyle from "@/styles/footer.styled";
import Container from "./Container";

const Footer = () => {
    return (
        <Footerstyle className="footer">
           <Container>
           <p className="copyright">copyright&copy;2024-{new Date().getFullYear() + 1}</p>
           </Container>
        </Footerstyle>
    );
};

export default Footer;
