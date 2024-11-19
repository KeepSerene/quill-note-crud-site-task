import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/formatDate";

export default function NoteCard({ note }) {
  const preview = note.content.slice(0, 100);

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold text-white mb-2">{note.title}</h2>

      <p className="text-gray-300 mb-3">{preview}...</p>

      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">
          {formatTimestamp(note.timestamp)}
        </span>

        <Link
          to={`/note/${note.id}`}
          aria-label={`Read more about ${note.title}`}
          className="text-blue-400 hover:text-blue-300"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
