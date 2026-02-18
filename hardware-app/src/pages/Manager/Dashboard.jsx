import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardLayout from "./DashboardLayout";
import EquipmentPost from "./EquipmentPost";

export default function Dashboard() {
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

      if (data.role !== "manager") {
        alert("Access denied");
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
      <Route
        path="/*"
        element={<DashboardLayout user={user} onLogout={logout} />}
      >
        {/* Nested routes inside DashboardLayout */}
        <Route
          index
          element={
            <div>
              <h2 className="text-2xl font-bold">Welcome {user.username}</h2>
              <p className="mt-2 text-gray-600">
                Manage your mining equipment here.
              </p>
            </div>
          }
        />
        <Route path="equipment" element={<EquipmentPost user={user} />} />
      </Route>
    </Routes>
  );
}
