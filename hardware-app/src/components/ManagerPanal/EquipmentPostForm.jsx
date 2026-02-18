import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function EquipmentPostForm({ user, onSuccess }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([""]);

  const submit = async () => {
    if (!name || !category || !location || !price || !stock) {
      alert("Please fill all required fields");
      return;
    }

    const validImages = images.filter((url) => url.trim() !== "");

    await addDoc(collection(db, "equipment"), {
      name,
      category,
      location,
      price: Number(price),
      stock: Number(stock),
      description,
      images: validImages,
      status: "pending",
      createdBy: user.uid,
      createdAt: serverTimestamp(),
    });

    alert("Equipment submitted for approval!");
    setName("");
    setCategory("");
    setLocation("");
    setPrice("");
    setStock("");
    setDescription("");
    setImages([""]);

    if (onSuccess) onSuccess(); // refresh the list
  };

  const addImageField = () => setImages([...images, ""]);
  const updateImage = (idx, value) => {
    const newImages = [...images];
    newImages[idx] = value;
    setImages(newImages);
  };

  return (
    <div className="p-6 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Submit New Mining Equipment</h2>

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Equipment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Location / Gem Field"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <textarea
        className="border p-2 mb-3 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <h3 className="font-semibold mb-2">Image URLs</h3>
      {images.map((img, idx) => (
        <input
          key={idx}
          className="border p-2 mb-2 w-full"
          placeholder={`Image URL #${idx + 1}`}
          value={img}
          onChange={(e) => updateImage(idx, e.target.value)}
        />
      ))}

      <button
        onClick={addImageField}
        className="mb-4 text-blue-600 hover:underline"
      >
        + Add another image
      </button>

      <button
        onClick={submit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Submit for Approval
      </button>
    </div>
  );
}
