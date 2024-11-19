import { useNavigate } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";
import NoteForm from "../components/NoteForm";

export default function AddNote() {
  const navigate = useNavigate();
  const { addNote } = useNotes();

  const handleSubmit = (note) => {
    addNote(note);
    navigate("/notes");
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">Create New Note</h1>

      <NoteForm onSubmit={handleSubmit} buttonText="Create Note" />
    </section>
  );
}
