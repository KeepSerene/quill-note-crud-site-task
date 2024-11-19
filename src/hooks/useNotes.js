// React imports
import { useState, useEffect } from "react";

// Helper function imports
import { saveNotes, getNotes } from "../utils/storage";

// Library imports
import { toast } from "react-toastify";

export function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const addNote = (note) => {
    const newNotes = [
      {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...note,
      },
      ...notes,
    ];

    setNotes(newNotes);
    saveNotes(newNotes);
    toast.success("Note created successfully!");
  };

  const updateNote = (id, updatedNote) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    );

    setNotes(newNotes);
    saveNotes(newNotes);
    toast.success("Note updated successfully!");
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
    saveNotes(newNotes);
    toast.success("Note deleted successfully!");
  };

  return { notes, addNote, updateNote, deleteNote };
}
