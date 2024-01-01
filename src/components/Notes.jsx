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
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handlesearch, [text]);
  return (
    <section className="container">
      <header className="note_header">
        <h2>Notlarım</h2>
        <input
          type="text"
          placeholder="Aramak istediğimiz kelimeyi giriniz"
          onChange={(e) => {
            setText.apply(e.target.value);

            handlesearch();
          }}
        />
        <button className="btn">
          {showsearch ? <IoCloseSharp /> : <CiSearch />}
        </button>
      </header>
      <div className="notes_container">
        {filteredNotes.length == 0 && (
          <p className="empty-notes"> Not Eklemek ister misiniz ?</p>
        )}

        {notes.map((note) => (
          <Noteitem key={note.id} note={note} />
        ))}
      </div>
      <Link className=" btn plusbutton" to={"/Createnotes"}>
        <AiOutlinePlus />
      </Link>
    </section>
  );
};
export default Notes;
