import SidebarStyles from "@/styles/sidebar.styled";

const Sidebar = ({ children }) => {
    return <SidebarStyles className="sidebar">{children}</SidebarStyles>;
};

export default Sidebar;
