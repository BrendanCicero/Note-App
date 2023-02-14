import React from "react";
import NotesList from "../components/NotesList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [intializing, setInitializing] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
      setInitializing(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (intializing) {
    return <h3>Tunggu sebentar...</h3>;
  }

  return (
    <section className="archive-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
      <AddButton />
    </section>
  );
}

export default ArchivePage;
