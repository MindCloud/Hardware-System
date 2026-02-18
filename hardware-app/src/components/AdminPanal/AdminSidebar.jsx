import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = "mb-3 p-2 rounded hover:bg-gray-700 transition-colors";
  const activeClass = "bg-gray-800";

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/approve"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Approve Equipments
      </NavLink>

      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        User Management
      </NavLink>
    </div>
  );
}
