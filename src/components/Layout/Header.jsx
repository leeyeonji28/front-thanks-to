import React from "react";
import HeaderSerach from "./HeaderSerach";
import { FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mb-5">
      <Link to={`/home`}>
        <h1 className="text-4xl font-bold text-white">Thanks to</h1>
      </Link>
      <ul className="flex">
        <li className="mr-6">
          <HeaderSerach />
        </li>
        <li className="w-12 h-12 rounded-lg bg-white p-3 mr-6">
          <FaBell className="w-6 h-6 text-rose-500" />
        </li>
        <li className="w-12 h-12 rounded-lg bg-white p-3">
          <FaUser className="w-6 h-6 text-rose-500" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
