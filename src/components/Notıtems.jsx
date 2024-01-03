import React from "react";

import { Link } from "react-router-dom";
const Noteitem = ({ note }) => {
  return (
    <Link to={`/EditNotes/${note.id}`} className="notef">
      <h4>
        {note.title.length > 40 ? note.title.slice(0, 40) + "..." : note.title}
      </h4>
      <p>{note.Date}</p>
    </Link>
  );
};
export default Noteitem;
