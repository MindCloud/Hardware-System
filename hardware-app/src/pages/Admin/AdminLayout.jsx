import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminPanal/AdminSidebar";
import Topbar from "../../components/ManagerPanal/Topbar";

export default function AdminLayout({ user, onLogout }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar user={user} onLogout={onLogout} />

        <div className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
