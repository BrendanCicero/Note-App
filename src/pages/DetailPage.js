import React from "react";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import {
  getNote,
  getActiveNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";

function DetailPage() {
  const { id } = useParams();
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [intializing, setInitializing] = React.useState(true);
  const [note, setNote] = React.useState([]);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setInitializing(false);
    });
  }, [id]);

  async function onDeleteHandler(id) {
    deleteNote(id);

    const { data } = await getActiveNotes();
    setActiveNotes(data);
  }

  function onArchiveHandler(id) {
    archiveNote(id);
  }

  function onUnarchiveHandler(id) {
    unarchiveNote(id);
  }

  if (intializing) {
    return <h3>Tunggu sebentar...</h3>;
  }

  return (
    <section>
      <NoteDetail
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        {...note}
      />
    </section>
  );
}

export default DetailPage;
