import React from "react";
import NoteItem from "./NoteItem.js";
import PropTypes from "prop-types";

function NotesList({ notes }) {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  ) : (
    <div className="notes-list-empty">
      <p>Tidak ada Catatan</p>
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
