import Container from "@/components/ui/Container";
import Layoutstyle from "@/styles/admin/layout.styled";

const AdminLayout = ({ children }) => {
    return (
        <Layoutstyle>
            <Container>
                <aside></aside>
                {children}
            </Container>
        </Layoutstyle>
    );
};

export default AdminLayout;
