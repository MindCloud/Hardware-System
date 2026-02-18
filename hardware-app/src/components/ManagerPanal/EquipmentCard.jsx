import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

export default function EquipmentCard({ equipment, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...equipment });

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this equipment?")) {
      await deleteDoc(doc(db, "equipment", equipment.id));
      if (onUpdate) onUpdate();
    }
  };

  const handleSave = async () => {
    const docRef = doc(db, "equipment", equipment.id);
    await updateDoc(docRef, { ...formData });
    setEditing(false);
    if (onUpdate) onUpdate();
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      {editing ? (
        <>
          <input
            className="border p-2 mb-2 w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
          <input
            className="border p-2 mb-2 w-full"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <input
            className="border p-2 mb-2 w-full"
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
          />
          <input
            className="border p-2 mb-2 w-full"
            type="number"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: Number(e.target.value) })
            }
          />
          <textarea
            className="border p-2 mb-2 w-full"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <button
            className="bg-blue-600 text-white px-4 py-1 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-1 rounded"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
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
            className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white px-4 py-1 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
