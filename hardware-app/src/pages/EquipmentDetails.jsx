import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EquipmentDetails() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, "equipment", id));
      setEquipment(snap.data());
    };
    fetch();
  }, []);

  if (!equipment) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded shadow">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src={equipment.images[imgIndex]}
              className="w-full h-96 object-cover rounded"
            />

            <div className="flex gap-2 mt-2">
              {equipment.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setImgIndex(idx)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                    idx === imgIndex ? "border-blue-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">{equipment.name}</h1>
            <p className="text-green-600 text-2xl font-semibold">
              ${equipment.price}
            </p>

            <p className="mt-4">{equipment.description}</p>

            <div className="mt-4 space-y-2">
              <p>
                <b>Category:</b> {equipment.category}
              </p>
              <p>
                <b>Location:</b> {equipment.location}
              </p>
              <p>
                <b>Stock:</b> {equipment.stock}
              </p>
            </div>

            <button
              onClick={() => {
                const phone = "94714922722";
                const message = `Hello, I am interested in the following mining equipment:

Name: ${equipment.name}
Category: ${equipment.category}
Price: $${equipment.price}
Location: ${equipment.location}

Please provide more details.`;

                const url =
                  "https://wa.me/" +
                  phone +
                  "?text=" +
                  encodeURIComponent(message);

                window.open(url, "_blank");
              }}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
            >
              Contact Seller on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
