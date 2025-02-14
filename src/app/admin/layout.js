import DashboardStyled from "@/styles/dashboard.styled";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { ImUsers } from "react-icons/im";
import { SlNotebook } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import Logout from "@/components/dashboard/Logout";
const AdminLayout = ({ children }) => {
    return (
        <DashboardStyled className="dashboard-layout">
            <Sidebar>
                <ul>
                    <li>
                        <Link href={"/admin"}>
                            <IoHomeOutline />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/ebooks/addebook">
                            <IoAddCircleOutline />
                            <span>Add Ebook</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users">
                            <ImUsers />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/ebooks">
                            <SlNotebook />
                            <span>Ebooks</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/payments">
                            <MdPayment />
                            <span> Payments</span>
                        </Link>
                    </li>
                    <Logout />
                </ul>
            </Sidebar>
            <div className="route">{children}</div>
        </DashboardStyled>
    );
};

export default AdminLayout;
