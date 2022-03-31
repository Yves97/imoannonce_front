import React from 'react'
import { Routes, Route,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./views/home/Home";
import Announcement from "./views/announcement/Announcement";
import Details from "./views/announcement/Details";
import NotFound from "./views/notFound/notFound";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";


function App() {
    return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/announcement/:id" element={<Details />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default App;
