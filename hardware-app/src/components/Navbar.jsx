import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MineStore</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/equipment" className="hover:text-blue-400">
          Equipment
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-400">
          Login
        </Link>
        <Link to="/register" className="bg-blue-600 px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </nav>
  );
}
