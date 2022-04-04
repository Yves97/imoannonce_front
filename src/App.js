import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import Announcement from "./views/announcement/Announcement";
import Details from "./views/announcement/Details";
import NotFound from "./views/notFound/notFound";
import Dashboard from "./views/dashboard/Dashboard";
import UpdateAnnouncement from './views/dashboard/Update';
import CreateAnnouncement from './views/dashboard/Create';


function App() {
    return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/announcement/:id" element={<Details />} />
        <Route path="/announcement/update/:id" element={<UpdateAnnouncement/>}/>
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/announcement/create" element={<CreateAnnouncement/>}/>
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default App;
