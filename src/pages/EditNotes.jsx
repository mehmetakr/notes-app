import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const EditNotes = ( {notes,setNotes}) => {
  const [title, settitle] = useState("");
  const {id}=useParams();
  const [details, setdetails] = useState("");

  const note =notes.find((item) => item.id== id);

   
  return (
    <section>
      <header className="note_container">
        <Link to={"/"} className="back">
          <IoIosArrowBack />
        </Link>
        <button className="lg-primary">Kaydet</button>
        <button className="delete" >
          <MdDelete />
        </button> 
        <form className="crate_note_from">
          <input
            type="text"
            autoFocus
            placeholder="Başlik düzenleyiniz.."
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <textarea
            rows="18"
            placeholder="Metni düzenleyiniz.."
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          ></textarea>
        </form>
      </header>
    </section>
  );
};

export default EditNotes;
