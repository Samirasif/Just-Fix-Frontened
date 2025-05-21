import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="px-3 sm:px-[5vw] md:px-[3vw] ">
      <Navbar />
     <div className="min-h-[calc(100vh-306px)]">

       <Outlet />
     </div>



      <Footer />

      
      
    </div>
  );
}
