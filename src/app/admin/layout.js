import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { ImUsers } from "react-icons/im";
import { SlNotebook } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import Logout from "@/components/dashboard/Logout";
const AdminLayout = ({ children }) => {
    const size = 20;
    return (
        <DashboardStyled className="dashboard-layout">
            <Sidebar>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <IoHomeOutline size={size} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/ebooks/addebook">
                            <IoAddCircleOutline size={size * 1.2} />
                            <span>Add Ebook</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users">
                            <ImUsers size={size} />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/ebooks">
                            <SlNotebook size={size} />
                            <span>Ebooks</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/payments">
                            <MdPayment size={size} />
                            <span> Payments</span>
                        </Link>
                    </li>
                    <Logout size={size * 1.2} />
                </ul>
            </Sidebar>
            <div className="route">{children}</div>
        </DashboardStyled>
    );
};

export default AdminLayout;
