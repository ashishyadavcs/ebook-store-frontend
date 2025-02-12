import Container from "@/components/ui/Container";
import Layoutstyle from "@/styles/admin/layout.styled";
import Link from "next/link";
import { ImUsers } from "react-icons/im";
import { SlNotebook } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import Logout from "@/components/dashboard/Logout";
const AdminLayout = ({ children }) => {
    return (
        <Layoutstyle className="admin">
            <Container>
                <aside>
                    <Link href="/admin/users">
                        <ImUsers />
                        <span>Customers</span>
                    </Link>
                    <Link href="/admin/ebooks">
                        <SlNotebook />
                        <span>Ebooks</span>
                    </Link>
                    <Link href="/admin/payments">
                        <MdPayment />
                        <span> Payments</span>
                    </Link>
                    <Logout />
                </aside>
                <div className="main">{children}</div>
            </Container>
        </Layoutstyle>
    );
};

export default AdminLayout;
