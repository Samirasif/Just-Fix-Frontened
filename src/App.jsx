import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Profile from './Pages/Profile';
import Bookings from './Pages/Bookings';
import Login from "./Pages/Login";
import Register from './Pages/Register';
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
     
     <Navbar/>
    
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </div>
  );
};
