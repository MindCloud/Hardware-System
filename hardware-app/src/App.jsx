import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Dashboard from "./pages/Manager/Dashboard";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Equipment from "./pages/Equipment";
import EquipmentDetails from "./pages/EquipmentDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/equipment/:id" element={<EquipmentDetails />} />

      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/manager/*" element={<Dashboard />} />
    </Routes>
  );
}
