import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EquipmentCard from "../components/EquipmentCard";

export default function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const q = query(
        collection(db, "equipment"),
        where("status", "==", "approved"),
      );
      const snap = await getDocs(q);
      setEquipment(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    };
    fetch();
  }, []);

  const filtered = equipment.filter((eq) => {
    return (
      eq.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? eq.category === category : true) &&
      (location
        ? eq.location.toLowerCase().includes(location.toLowerCase())
        : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Filters */}
      <div className="bg-white mx-10 mt-6 p-4 rounded shadow flex gap-4">
        <input
          className="border p-2 flex-1"
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="ASIC">ASIC</option>
          <option value="GPU">GPU</option>
          <option value="Drill">Drill</option>
          <option value="Gem Extractor">Gem Extractor</option>
        </select>

        <input
          className="border p-2"
          placeholder="Location / Gem field"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 px-10 mt-6">
        {filtered.length === 0 ? (
          <p>No equipment found.</p>
        ) : (
          filtered.map((eq) => <EquipmentCard key={eq.id} equipment={eq} />)
        )}
      </div>

      <Footer />
    </div>
  );
}
