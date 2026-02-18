import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function AdminEquipmentCard({ equipment, onUpdate }) {
  const toggleApproval = async () => {
    const docRef = doc(db, "equipment", equipment.id);
    await updateDoc(docRef, {
      status: equipment.status === "approved" ? "pending" : "approved",
    });
    if (onUpdate) onUpdate();
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h3 className="font-bold text-lg">{equipment.name}</h3>
      <p>Category: {equipment.category}</p>
      <p>Location: {equipment.location}</p>
      <p>Price: ${equipment.price}</p>
      <p>Stock: {equipment.stock}</p>
      <p>Status: {equipment.status}</p>
      <p className="mb-2">{equipment.description}</p>

      <div className="flex gap-2 overflow-x-auto mb-2">
        {equipment.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="equipment"
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>

      <button
        onClick={toggleApproval}
        className={`px-4 py-1 rounded text-white ${
          equipment.status === "approved" ? "bg-yellow-500" : "bg-green-600"
        }`}
      >
        {equipment.status === "approved" ? "Set Pending" : "Approve"}
      </button>
    </div>
  );
}
