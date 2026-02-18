import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-20 bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <input className="border p-2 mb-3 w-full" placeholder="Your Name" />
        <input className="border p-2 mb-3 w-full" placeholder="Email" />
        <textarea className="border p-2 mb-3 w-full" placeholder="Message" />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Send Message
        </button>
      </div>

      <Footer />
    </div>
  );
}
