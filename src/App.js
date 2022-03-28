import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Announcement from "./views/announcement/Announcement";
import Details from "./views/announcement/Details";
import NotFound from "./views/notFound/notFound";
import Login from "./views/login/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/announcement/:id" element={<Details />} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default App;
