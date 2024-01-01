import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./components/Notes";
import Createnotes from "./pages/Createnotes";
import EditNotes from "./pages/EditNotes";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState (JSON.parse(localStorage.getItem("notes"))  || []);

useEffect(()=>{
localStorage.setItem("notes",JSON.stringify(notes));
},[notes])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes  notes={notes} setNotes={setNotes}/>} />
        <Route
          path="/CreateNotes"
          element={<Createnotes setNotes={setNotes} />}
        />
        <Route path="/EditNotes/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
