import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Announcement from "./views/announcement/Announcement";
import Details from "./views/announcement/Details";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/announcement/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
