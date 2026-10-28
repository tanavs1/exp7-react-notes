import { useState } from "react";

// form to add a new note
function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      setError("Please fill in both the title and the note.");
      return;
    }

    onAdd(title.trim(), content.trim());
    setTitle("");
    setContent("");
    setError("");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Add a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note here"
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
