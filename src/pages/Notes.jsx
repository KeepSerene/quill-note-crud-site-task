import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const { notes } = useNotes();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchTerm} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => <NoteCard key={note.id} note={note} />)
        ) : (
          <div className="col-span-full text-center text-gray-400 py-12">
            {searchTerm
              ? "No notes found matching your search."
              : "No notes available. Create a note to get started!"}
          </div>
        )}
      </div>
    </div>
  );
}
