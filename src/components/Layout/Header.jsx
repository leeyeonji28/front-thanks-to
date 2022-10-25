import React from "react";
import HeaderSerach from "./HeaderSerach";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";

const Header = () => {
  const userId = useRecoilValue(loginState);

  return (
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
  );
};

export default Header;
