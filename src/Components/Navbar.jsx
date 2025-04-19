import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-1 font-medium">
      <img className="w-44 h-24" src="/src/assets/justFix.png" alt="" />

      <ul className="hidden text-xl sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="hover:text-blue-500">
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/services"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <li>Services</li>
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-500">
          <li>About</li>
        </NavLink>

        <NavLink to="/contact" className="hover:text-blue-500">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <div className="flex border-1 border-gray-300 rounded">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered p-2 w-24 md:w-auto"
        />
        <FaSearch className="text-2xl mr-2 mt-1" />
      </div>

      <div className="flex gap-3 text-green-800">
        <NavLink to="/login" className="text-xl hover:text-blue-500">
          <p>Login</p>
        </NavLink>
        <CgProfile className="text-3xl ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
