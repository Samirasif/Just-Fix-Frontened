import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center  font-medium px-2 bg-gray-100">
      <img className="w-44 h-24" src="/src/assets/justFix.png" alt="" />

      <ul className="hidden text-xl sm:flex gap-5  text-gray-700">
        <NavLink to="/" className="hover:text-blue-500">
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/services"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <li>Services</li>
        </NavLink>

        <NavLink to="/professionals" className="hover:text-blue-500">
          <li>Professionals</li>
        </NavLink>
        <NavLink to="/bookings" className="hover:text-blue-500">
          <li>Bookings</li>
        </NavLink>

        

       
        <NavLink to="/contact" className="hover:text-blue-500">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <div className="flex border-2 border-gray-300 rounded">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered p-2 w-24 md:w-auto"
        />
        <button className="btn">
          <FaSearch className="text-2xl mr-2 mt-1" />
        </button>
      </div>

      <div className="flex gap-3 text-green-800">
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-primary text-white border rounded-2xl p-2 bg-sky-600 hover:text-rose-900"
          >
            Log-Out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="text-xl text-white btn btn-accent bg-teal-900 border rounded-2xl p-2 hover:text-blue-500"
          >
            Login
          </NavLink>
        )}

        <NavLink to="/profile" className="text-xl hover:text-blue-500">
          <CgProfile className="text-5xl ml-2" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
