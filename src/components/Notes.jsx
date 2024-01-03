import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import notes from "../dummynotes";
import Noteitem from "./Notıtems";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Notes = ({ notes }) => {
  const [showsearch, setshowsearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setfilterednotes] = useState(notes);

  const handlesearch = () => {
    setfilterednotes(
      notes?.filter((note) => {
        return note.title.toLowerCase().includes(text.toLowerCase());
      })
    );
  };

  useEffect(handlesearch, [text]);

  return (
    <section className="container">
      <header className="note_header">
        {!showsearch && <h2>Notlarim</h2>}
        {showsearch &&   <input
          type="text"
          placeholder="Aramak istediğiniz kelimeyi giriniz"
          onChange={(e) => {
            setText(e.target.value);
            handlesearch();
          }}
        /> }
        
        <button className="btn" onClick={() => setshowsearch(prewstate => !prewstate)}>
          {showsearch ? <IoCloseSharp /> : <CiSearch />}
        </button>
      </header>
      <div className="notes_container">
        {filteredNotes.length === 0 && (
          <p className="empty-notes">Not Eklemek ister misiniz?</p>
        )}

        {filteredNotes.map((note) => (
          <Noteitem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn plusbutton" to={"/Createnotes"}>
        <AiOutlinePlus />
      </Link>
    </section>
  );
};

export default Notes;

