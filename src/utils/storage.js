export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}
