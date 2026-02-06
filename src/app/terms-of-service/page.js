import Container from "@/components/ui/Container";
import PolicyWrapper from "@/styles/terms-of-service.styled";

const TermsOfService = () => {
    return (
        <Container>
            <PolicyWrapper>
                <h1>Terms of Service</h1>
                <p>Last updated: February 6, 2026</p>

                <h2>Acceptance of Terms</h2>
                <p>
                    By accessing and using our e-book store, you accept and agree to be bound by the
                    terms and provision of this agreement.
                </p>

                <h2>Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials on our
                    website for personal, non-commercial transitory viewing only.
                </p>

                <h2>User Accounts</h2>
                <p>
                    When you create an account with us, you must provide information that is
                    accurate, complete, and current at all times.
                </p>

                <h2>Prohibited Uses</h2>
                <p>
                    You may not use our products for any illegal or unauthorized purpose nor may
                    you, in the use of the Service, violate any laws in your jurisdiction.
                </p>

                <h2>Content</h2>
                <p>
                    Our Service allows you to post, link, store, share and otherwise make available
                    certain information, text, graphics, or other material. You are responsible for
                    content that you post.
                </p>

                <h2>Contact Information</h2>
                <p>
                    Questions about the Terms of Service should be sent to us at
                    legal@ebookstore.com.
                </p>
            </PolicyWrapper>
        </Container>
    );
};

export default TermsOfService;
