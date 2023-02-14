import React from "react";
import PropTypes from "prop-types";

function NoteAppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Catatankuu</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." onChange={onSearch} />
      </div>
    </div>
  );
}

NoteAppHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NoteAppHeader;
