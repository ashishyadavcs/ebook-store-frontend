import Container from "@/components/ui/Container";
import PolicyWrapper from "@/styles/cookie-policy.styled";

const CookiePolicy = () => {
    return (
        <Container>
            <PolicyWrapper>
                <h1>Cookie Policy</h1>
                <p>Last updated: February 6, 2026</p>

                <h2>What Are Cookies</h2>
                <p>
                    Cookies are small text files that are placed on your computer or mobile device
                    when you visit our website.
                </p>

                <h2>How We Use Cookies</h2>
                <p>
                    We use cookies to improve your browsing experience, analyze site traffic, and
                    personalize content.
                </p>

                <h2>Types of Cookies We Use</h2>
                <ul>
                    <li>
                        <strong>Essential Cookies:</strong> Required for the website to function
                        properly
                    </li>
                    <li>
                        <strong>Analytics Cookies:</strong> Help us understand how visitors interact
                        with our website
                    </li>
                    <li>
                        <strong>Functional Cookies:</strong> Remember your preferences and settings
                    </li>
                    <li>
                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                    </li>
                </ul>

                <h2>Managing Cookies</h2>
                <p>
                    You can control and manage cookies through your browser settings. However,
                    disabling cookies may affect the functionality of our website.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about our use of cookies, please contact us at
                    privacy@ebookstore.com.
                </p>
            </PolicyWrapper>
        </Container>
    );
};

export default CookiePolicy;
