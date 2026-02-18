import { Outlet } from "react-router-dom";
import Sidebar from "../../components/ManagerPanal/Sidebar";
import Topbar from "../../components/ManagerPanal/Topbar";

export default function DashboardLayout({ user, onLogout }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar user={user} onLogout={onLogout} />

        {/* Nested page content */}
        <div className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
