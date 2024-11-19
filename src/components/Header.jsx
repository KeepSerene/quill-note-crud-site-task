import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/notes" className="text-2xl font-bold">
          QuillNote
        </Link>

        <Link
          to="/add-note"
          aria-label="Create new note"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPen /> New Note
        </Link>
      </nav>
    </header>
  );
}
