import React from "react";
import { useState } from "react";
import axios from "axios";
import base64 from "base-64";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const togglePass = (e) => {
    e.preventDefault();

    setShowPwd(!showPwd);
  };

  const login = async (res) => {
    if (userId !== "" && userPwd !== "") {
      try {
        const loginData = await axios({
          url: "/login",
          method: "POST",
          data: {
            username: userId,
            password: userPwd,
          },
        });
        alert("로그인이 완료되었습니다.");

        // console.log(loginData);
        const jwtToken = loginData.headers.authorization.substring(
          loginData.headers.authorization.indexOf(" ") + 1,
          loginData.headers.authorization.length
        );
        const payload = jwtToken.substring(
          jwtToken.indexOf(".") + 1,
          jwtToken.lastIndexOf(".")
        );
        const dec = JSON.parse(base64.decode(payload));

        localStorage.setItem("Token", jwtToken);
        localStorage.setItem("id", dec.id);

        // console.log(jwtToken);
        // console.log(dec.id);
        navigate("/home");
      } catch (e) {
        console.log(e);
        alert("Id 또는 Password를 다시 확인해 주세요.");
      }
    } else if (userId === "") {
      alert("Id를 입력해 주세요!");
    } else if (userPwd === "") {
      alert("Password를 입력해 주세요!");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[350px] text-center">
        <h1 className="mb-14 text-5xl text-white font-bold">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <input
            type="text"
            placeholder="Id"
            value={userId}
            className="w-full p-4 mb-4 rounded-lg outline-rose-500"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <div className="relative">
            <input
              type={showPwd ? "text" : "Password"}
              placeholder="Password"
              autoComplete="off"
              value={userPwd}
              className="w-full p-4 mb-4 rounded-lg outline-rose-500"
              onChange={(e) => {
                setUserPwd(e.target.value);
              }}
            />
            <div
              onClick={(e) => {
                togglePass(e);
              }}
            >
              {showPwd ? (
                <FaEye className="absolute top-5 right-5 text-gray-800 cursor-pointer" />
              ) : (
                <FaEyeSlash className="absolute top-5 right-5 text-gray-400 cursor-pointer" />
              )}
            </div>
          </div>
          <button
            className="w-full p-4 bg-rose-500 text-white rounded-lg"
            onClick={login}
          >
            Login
          </button>
        </form>
        <p className="flex justify-between items-center w-full my-7 text-white text-xl">
          <span className="block w-28 h-[2px] bg-white"></span>
          or
          <span className="block w-28 h-[2px] bg-white"></span>
        </p>
        <Link to={`/Join`}>
          <button className="w-full p-4 bg-rose-300 text-white rounded-lg ">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
