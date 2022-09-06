import React from "react";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { FaHeart, FaInfoCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const SideNav = () => {
  return (
    <div className="flex flex-col justify-between w-20 h-full rounded-lg p-4 mr-5 bg-white">
      <ul>
        <li className="w-12 h-12 rounded-lg text-gray-300 p-3 mb-6 hover:text-rose-500 cursor-pointer">
          <AiFillHome className="w-6 h-6" />
        </li>
        <li className="w-12 h-12 rounded-lg text-gray-300 p-3 mb-6 hover:text-rose-500 cursor-pointer">
          <AiFillAppstore className="w-6 h-6" />
        </li>
        <li className="w-12 h-12 rounded-lg text-gray-300 p-3 mb-6 hover:text-rose-500 cursor-pointer">
          <FaHeart className="w-6 h-6" />
        </li>
        <li className="w-12 h-12 rounded-lg text-gray-300 p-3 hover:text-rose-500 cursor-pointer">
          <FaInfoCircle className="w-6 h-6" />
        </li>
      </ul>
      <div className="w-12 h-12 p-3 text-gray-500 hover:text-rose-500 cursor-pointer">
        <FiLogIn className="w-6 h-6" />
      </div>
    </div>
  );
};

export default SideNav;
