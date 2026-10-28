import { useState } from "react";

// one note: can be viewed, edited or deleted
function NoteItem({ note, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function handleSave() {
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    onUpdate(note.id, title.trim(), content.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(false);
  }

  // edit mode
  if (isEditing) {
    return (
      <div className="note">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="buttons">
          <button className="save" onClick={handleSave}>Save</button>
          <button className="cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }

  // view mode
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="buttons">
        <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
        <button className="delete" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;
