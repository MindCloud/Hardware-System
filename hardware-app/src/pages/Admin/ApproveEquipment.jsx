import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import AdminEquipmentCard from "../../components/AdminPanal/AdminEquipmentCard";

export default function ApproveEquipment() {
  const [equipmentList, setEquipmentList] = useState([]);

  const fetchEquipment = async () => {
    const snap = await getDocs(collection(db, "equipment"));
    setEquipmentList(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Approve Equipments</h2>
      {equipmentList.length === 0 ? (
        <p>No equipment submissions found.</p>
      ) : (
        equipmentList.map((eq) => (
          <AdminEquipmentCard
            key={eq.id}
            equipment={eq}
            onUpdate={fetchEquipment}
          />
        ))
      )}
    </div>
  );
}
