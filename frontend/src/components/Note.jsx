import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_At).toLocaleDateString("en-US");

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="text-muted small">Created on: {formattedDate}</p>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
