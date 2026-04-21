import { Metadata } from "next";
import AdminSideBar from "./AdminSideBar"

interface AdminDashboardLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is an admin dashboard",
};


const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
    return (
        <div className="overflow-height flex items-start justify-between overflow-hidden">
            <div className="overflow-height w-15 lg:w-1/5 bg-blue-400 text-white p-1 lg:p-5">
                <AdminSideBar/>
            </div>
            <main className="overflow-height w-full lg:w-4/5 overflow-y-scroll p-5">
                {children}
            </main>
        </div>
    )
}

export default AdminDashboardLayout