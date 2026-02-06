import Container from "@/components/ui/Container";
import PolicyWrapper from "@/styles/refund-policy.styled";

const RefundPolicy = () => {
    return (
        <Container>
            <PolicyWrapper>
                <h1>Refund Policy</h1>
                <p>Last updated: February 6, 2026</p>

                <h2>Digital Products</h2>
                <p>
                    Due to the nature of digital products (e-books), all sales are final. Once an
                    e-book has been downloaded, we are unable to offer refunds.
                </p>

                <h2>Exceptions</h2>
                <p>
                    Refunds may be considered in exceptional circumstances, such as technical issues
                    preventing access to purchased content. Please contact our support team for
                    assistance.
                </p>

                <h2>Damaged or Incorrect Items</h2>
                <p>
                    If you receive a damaged file or incorrect e-book, please contact us within 7
                    days of purchase for a replacement.
                </p>

                <h2>Processing Refunds</h2>
                <p>
                    Approved refunds will be processed within 5-10 business days and credited back
                    to the original payment method.
                </p>

                <h2>Contact Us</h2>
                <p>
                    For refund requests, please email us at refunds@ebookstore.com with your order
                    details.
                </p>
            </PolicyWrapper>
        </Container>
    );
};

export default RefundPolicy;
