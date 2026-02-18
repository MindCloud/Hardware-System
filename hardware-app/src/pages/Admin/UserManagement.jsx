import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));
      setUsers(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchUsers();
  }, []);

  const blockUser = async (id) => {
    await updateDoc(doc(db, "users", id), { status: "blocked" });
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: "blocked" } : u)),
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{u.username}</h3>
              <p>Email: {u.email}</p>
              <p>Role: {u.role}</p>
              <p>Status: {u.status}</p>
            </div>
            {u.status !== "blocked" && (
              <button
                onClick={() => blockUser(u.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Block
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
