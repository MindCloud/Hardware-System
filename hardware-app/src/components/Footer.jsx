export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-10 py-10 grid grid-cols-3 gap-6">
        <div>
          <h2 className="text-white font-bold text-lg mb-2">MineStore</h2>
          <p className="text-sm">
            Professional mining hardware marketplace. Secure, scalable and
            trusted.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Login</li>
            <li>Register</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@minestore.com</p>
          <p className="text-sm">Phone: +94 77 123 4567</p>
          <p className="text-sm">Sri Lanka</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MineStore. All rights reserved.
      </div>
    </footer>
  );
}
