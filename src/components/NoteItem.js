import React from "react";
import NoteItemContent from "./NoteItemContent.js";
import PropTypes from "prop-types";

function NoteItem({ title, body, createdAt, id }) {
  return (
    <div className="note-item">
      <NoteItemContent
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
      />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
