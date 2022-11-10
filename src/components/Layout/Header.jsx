import React from "react";
import HeaderSerach from "./HeaderSerach";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";
import { useMediaQuery } from "react-responsive";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { FaHeart, FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const userId = useRecoilValue(loginState);

  // media-query
  const mobile = useMediaQuery({
    query: "(max-width:639px)",
  });

  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("id");
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <div>
      {mobile ? (
        <div className="fixed w-screen px-4">
          <div className="flex justify-between items-center mb-5 pt-4">
            <div class="relative">
              <label
                tabindex="0"
                className="flex flex-col justify-between w-8 h-6"
              >
                <input
                  type="checkbox"
                  name="menu_inner"
                  id="icon"
                  className="hidden peer"
                ></input>
                <span className="block w-8 h-1 rounded-lg bg-white z-20"></span>
                <span className="block w-8 h-1 rounded-lg bg-white z-20"></span>
                <span className="block w-8 h-1 rounded-lg bg-white z-20"></span>
                <div
                  tabindex="0"
                  class="peer-checked:block hidden w-screen h-screen bg-black bg-opacity-20 absolute -top-10 -left-[50%]"
                >
                  <ul class="w-56 h-screen bg-rose-500 text-gray-content p-2 rounded-r-lg pt-28 z-10">
                    <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                      <HeaderSerach />
                    </li>
                    <Link to={`/home`}>
                      <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                        <AiFillHome className="w-6 h-6 mr-4 text-white group-hover:text-rose-500" />
                        <p className="text-white group-hover:text-rose-500 text-xl">
                          Home
                        </p>
                      </li>
                    </Link>
                    <Link to={`/mypage/${userId}`}>
                      <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                        <FaUser className="w-6 h-6 mr-4 text-white group-hover:text-rose-500" />
                        <p className="text-white group-hover:text-rose-500 text-xl">
                          My Page
                        </p>
                      </li>
                    </Link>
                    <Link to={`/post`}>
                      <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                        <AiFillAppstore className="w-6 h-6 mr-4 text-white group-hover:text-rose-500" />
                        <p className="text-white group-hover:text-rose-500 text-xl">
                          Post
                        </p>
                      </li>
                    </Link>
                    <Link to={`/hot_post`}>
                      <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                        <FaHeart className="w-6 h-6 mr-4 text-white group-hover:text-rose-500" />
                        <p className="text-white group-hover:text-rose-500 text-xl">
                          Hot_Post
                        </p>
                      </li>
                    </Link>
                    <Link to={`/info`}>
                      <li className="group flex items-center p-4 rounded-lg mb-6 hover:bg-white">
                        <FaInfoCircle className="w-6 h-6 mr-4 text-white group-hover:text-rose-500" />
                        <p className="text-white group-hover:text-rose-500 text-xl">
                          About
                        </p>
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
              </label>
              {/* <label tabindex="0" class="btn btn-ghost">
              <AiOutlineMenu className="text-white text-3xl" />
            </label> */}
            </div>
            <Link to={`/home`}>
              <h1 className="text-4xl font-bold text-white">Thanks to</h1>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between mb-5">
          <Link to={`/home`}>
            <h1 className="text-4xl font-bold text-white">Thanks to</h1>
          </Link>
          <ul className="flex">
            <li className="mr-6">
              <HeaderSerach />
            </li>
            <Link to={`/mypage/${userId}`}>
              <li className="w-12 h-12 rounded-lg bg-white p-3">
                <FaUser className="w-6 h-6 text-rose-500" />
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
