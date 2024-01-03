import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import usecreateDate  from "../components/usecreateDate";
const Createnotes = ({ setNotes }) => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const Date =usecreateDate();

  console.log(Date);
  // Usenavigate fonksiyonu react router dom da yönlendirme işine yarar.Başka bir sayfaya yönlenme işlemini yapar bizim için bir react hook'udur
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    // sayfanın tekrar yenilenmesinin önune geçer
    e.preventDefault();
    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        Date,
      };
      // NOTLARI NOTE DİZİSİNE EKLEME
      setNotes((prevnotes) => [note, ...prevnotes]);
      console.log(note);
      navigate("/");
    }
    
  };
  return (
    <section>
      <header className="note_container">
        <Link to={"/"} className="back">
          <IoIosArrowBack />
        </Link>
        <button className="lg-primary" onClick={handlesubmit}>
          Kaydet
        </button>
        <form className="crate_note_from" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Başlık"
            autoFocus
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <textarea 
            rows="28"
            placeholder="Not detayı"
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          ></textarea>
        </form>
      </header>
    </section>
  );
};
export default Createnotes;
