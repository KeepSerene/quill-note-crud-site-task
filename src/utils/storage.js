export function saveNotes(notes, username) {
  localStorage.setItem(`notes_${username}`, JSON.stringify(notes));
}

export function getNotes(username) {
  const notes = localStorage.getItem(`notes_${username}`);
  return notes ? JSON.parse(notes) : [];
}
