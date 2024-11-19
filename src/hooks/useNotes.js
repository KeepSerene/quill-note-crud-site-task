// React imports
import { useState, useEffect } from "react";

// Helper function imports
import { saveNotes, getNotes } from "../utils/storage";

// Libray imports
import { toast } from "react-toastify";

export function useNotes(username) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (username) {
      setNotes(getNotes(username));
    }
  }, [username]);

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
    saveNotes(newNotes, username);
    toast.success("Note created successfully!");
  };

  const updateNote = (id, updatedNote) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    );

    setNotes(newNotes);
    saveNotes(newNotes, username);
    toast.success("Note updated successfully!");
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
    saveNotes(newNotes, username);
    toast.success("Note deleted successfully!");
  };

  return { notes, addNote, updateNote, deleteNote };
}
