import React from "react";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { FaHeart, FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("id");
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-between w-20 h-[855px] rounded-lg p-4 mr-5 bg-white">
      <ul>
        <Link to={`/home`}>
          <li className="group relative w-12 h-12 p-3 rounded-lg text-gray-300 mb-6 hover:text-rose-500">
            <AiFillHome className="w-6 h-6" />
            <span className="absolute hidden top-0 left-12 p-2 bg-white shadow-lg text-gray-800 group-hover:block z-10">
              Home
            </span>
          </li>
        </Link>
        <Link to={`/post`}>
          <li className="group relative w-12 h-12 rounded-lg text-gray-300 p-3 mb-6 hover:text-rose-500">
            <AiFillAppstore className="w-6 h-6" />

            <span className="absolute hidden top-0 left-12 p-2 bg-white shadow-lg text-gray-800 rounded group-hover:block z-10">
              Post
            </span>
          </li>
        </Link>
        <Link to={`/hot_post`}>
          <li className="group relative w-12 h-12 rounded-lg text-gray-300 p-3 mb-6 hover:text-rose-500">
            <FaHeart className="w-6 h-6" />

            <span className="absolute hidden top-0 left-12 p-2 bg-white shadow-lg text-gray-800 group-hover:block z-10">
              Hot_Post
            </span>
          </li>
        </Link>
        <Link to={`/info`}>
          <li className="group relative w-12 h-12 rounded-lg text-gray-300 p-3 hover:text-rose-500">
            <FaInfoCircle className="w-6 h-6" />

            <span className="absolute hidden top-0 left-12 p-2 bg-white shadow-lg text-gray-800 group-hover:block z-10">
              What's_Thanks_to
            </span>
          </li>
        </Link>
      </ul>
      <div
        className="group relative w-12 h-12 p-3 text-gray-500 hover:text-rose-500"
        onClick={logoutClick}
      >
        <FiLogOut className="w-6 h-6" />
        <span className="absolute hidden top-0 left-12 p-2 bg-white shadow-lg text-gray-800 group-hover:block z-10">
          LogOut
        </span>
      </div>
    </div>
  );
};

export default SideNav;
