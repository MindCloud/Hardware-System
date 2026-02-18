import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EquipmentCard({ equipment }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((prev) => (prev + 1) % equipment.images.length);

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + equipment.images.length) % equipment.images.length,
    );

  return (
    <div
      className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/equipment/${equipment.id}`)}
    >
      <div className="relative">
        <img
          src={equipment.images[index]}
          className="h-40 w-full object-cover mb-3 rounded"
        />

        {equipment.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 bg-black/50 text-white px-2 rounded"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 bg-black/50 text-white px-2 rounded"
            >
              ›
            </button>
          </>
        )}
      </div>

      <h3 className="font-bold">{equipment.name}</h3>
      <p className="text-green-600 font-semibold">${equipment.price}</p>
      <p className="text-sm text-gray-600">{equipment.location}</p>
    </div>
  );
}
