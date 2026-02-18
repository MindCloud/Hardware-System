import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import EquipmentCard from "./EquipmentCard";

export default function EquipmentList({ user }) {
  const [equipment, setEquipment] = useState([]);

  const fetchEquipment = async () => {
    const q = query(
      collection(db, "equipment"),
      where("createdBy", "==", user.uid),
    );
    const snap = await getDocs(q);
    setEquipment(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Submitted Equipments</h2>
      {equipment.length === 0 ? (
        <p>No equipments submitted yet.</p>
      ) : (
        equipment.map((eq) => (
          <EquipmentCard key={eq.id} equipment={eq} onUpdate={fetchEquipment} />
        ))
      )}
    </div>
  );
}
