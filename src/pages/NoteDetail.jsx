// Library imports
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

// Custom hook imports
import { useNotes } from "../hooks/useNotes";
import { useAuth } from "../hooks/useAuth";

// Component imports
import NoteForm from "../components/NoteForm";

export default function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { username } = useAuth();
  const { notes, updateNote, deleteNote } = useNotes(username);

  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    navigate("/notes");
    return null;
  }

  const handleUpdate = (updatedNote) => {
    updateNote(note.id, updatedNote);
    navigate("/notes");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
      navigate("/notes");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/notes")}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Notes
        </button>

        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-400 flex items-center gap-2"
          aria-label="Delete note"
        >
          <FaTrash /> Delete
        </button>
      </div>

      <NoteForm
        initialData={note}
        onSubmit={handleUpdate}
        buttonText="Update Note"
      />
    </div>
  );
}
