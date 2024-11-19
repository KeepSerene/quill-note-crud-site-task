// Custom hook import
import { useAuth } from "../hooks/useAuth";

// Libray imports
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

export default function Header() {
  const { username, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/notes" className="text-2xl font-bold">
            QuillNote
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/add-note"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
              aria-label="Create new note"
            >
              <FaPen /> New Note
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
          <p className="text-gray-300">
            Welcome, <span className="font-semibold">{username}</span>
          </p>

          <button
            onClick={logout}
            className="text-red-400 hover:text-red-300"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
