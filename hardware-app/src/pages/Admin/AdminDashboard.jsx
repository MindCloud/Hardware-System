import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import AdminLayout from "./AdminLayout";
import ApproveEquipment from "./ApproveEquipment";
import UserManagement from "./UserManagement";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      const snap = await getDoc(doc(db, "users", currentUser.uid));
      const data = snap.data();

      if (data.role !== "admin") {
        alert("Admins only");
        navigate("/login");
        return;
      }

      setUser(data);
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) return null;

  return (
    <Routes>
      <Route path="/*" element={<AdminLayout user={user} onLogout={logout} />}>
        <Route
          index
          element={
            <div>
              <h2 className="text-2xl font-bold">Welcome {user.username}</h2>
              <p className="mt-2 text-gray-600">
                Use the sidebar to manage equipment and users.
              </p>
            </div>
          }
        />
        <Route path="approve" element={<ApproveEquipment />} />
        <Route path="users" element={<UserManagement />} />
      </Route>
    </Routes>
  );
}
