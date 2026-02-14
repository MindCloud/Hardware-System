import { auth } from "../auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/");
      else setUser(currentUser);
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome 🎉</h1>
      <p className="mb-6">Logged in as:</p>
      <p className="bg-white text-black px-4 py-2 rounded mb-6">
        {user?.email}
      </p>

      <button onClick={logout} className="bg-red-500 px-6 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
