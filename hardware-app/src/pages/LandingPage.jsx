import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center mt-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Professional Mining Hardware Marketplace
        </h1>

        <p className="text-gray-600 max-w-2xl mb-6">
          Buy, manage and distribute high performance crypto mining equipment.
          Trusted by professionals.
        </p>

        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="bg-gray-800 text-white px-6 py-3 rounded"
          >
            Create Account
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-8 mt-20 px-10">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">ASIC Miners</h3>
          <p className="text-sm text-gray-600">
            Latest generation mining rigs with maximum efficiency.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">GPU Rigs</h3>
          <p className="text-sm text-gray-600">
            Custom built GPU setups for scalable mining.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">Hosting</h3>
          <p className="text-sm text-gray-600">
            Secure datacenter hosting with 24/7 monitoring.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
