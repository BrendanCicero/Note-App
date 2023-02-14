import React from "react";
import NotesList from "../components/NotesList";
import AddButton from "../components/AddButton";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [intializing, setInitializing] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
      setInitializing(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (intializing) {
    return <h3>Tunggu sebentar</h3>;
  }

  return (
    <section className="home-page">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
      <AddButton />
    </section>
  );
}

export default HomePage;
