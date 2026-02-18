export default function Topbar({ user, onLogout }) {
  return (
    <div className="w-full h-14 bg-white shadow flex justify-between items-center px-6">
      <h1 className="font-semibold text-lg">Manager Panel</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-700">{user.username}</span>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
