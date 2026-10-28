import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm.jsx";
import NoteItem from "./components/NoteItem.jsx";

// get saved notes from the browser (so notes stay after refresh)
function loadNotes() {
  try {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function App() {
  const [notes, setNotes] = useState(loadNotes);

  // save notes every time they change
  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.log("Could not save notes", error);
    }
  }, [notes]);

  // ADD a new note
  function addNote(title, content) {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setNotes([newNote, ...notes]);
  }

  // UPDATE an existing note
  function updateNote(id, title, content) {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: title, content: content } : note
    );
    setNotes(updatedNotes);
  }

  // DELETE a note
  function deleteNote(id) {
    const remainingNotes = notes.filter((note) => note.id !== id);
    setNotes(remainingNotes);
  }

  return (
    <div className="container">
      <h1>My Notes</h1>

      <NoteForm onAdd={addNote} />

      <h2>All Notes ({notes.length})</h2>

      {notes.length === 0 && <p className="empty">No notes yet. Add your first note above.</p>}

      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
