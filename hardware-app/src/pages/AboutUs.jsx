import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-20 bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">About MineStore</h1>
        <p className="text-gray-600 mb-4">
          MineStore is a professional mining hardware marketplace connecting
          suppliers and miners worldwide.
        </p>
        <p className="text-gray-600">
          We specialize in ASIC miners, GPU rigs and mining infrastructure.
        </p>
      </div>

      <Footer />
    </div>
  );
}
