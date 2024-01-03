import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import usecreateDate from "../components/usecreateDate";

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);

  const [title, settitle] = useState(note.title);
  const [details, setdetails] = useState(note.details);
  const Date = usecreateDate();
  const navigate = useNavigate();
  const handleform = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, Date };

      const newnotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newnotes);
    } else {
      return;
    }
    navigate("/");
  };
  // notu silme fonksiyonuu

  const handledelete = () => {
    if (window.confirm("Silmek istediğinize emin misiniz ?")) {
      const newnotes = notes.filter((item) => item.id != id);
      setNotes(newnotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="note_container">
        <Link to={"/"} className="back">
          <IoIosArrowBack />
        </Link>
        <button className="lg-primary" onClick={handleform}>
          Kaydet
        </button>
        <button className="delete" onClick={handledelete}>
          <MdDelete />
        </button>
        <form className="crate_note_from" onSubmit={handleform}>
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
