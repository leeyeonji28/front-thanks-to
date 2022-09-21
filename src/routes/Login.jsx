import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  // const [member, setMember] = useState({});

  // const config = {
  //   headers: {
  //     Authorization: "Beadrer " + localStorage.getItem("jwtToken"),
  //   },
  // };

  const login = async (res) => {
    try {
      const data = await axios({
        url: "http://localhost:8092/login",
        method: "POST",
        headers: {
          MySecretKey1$1$1234: localStorage.getItem("Token"),
        },
        data: {
          username: userId,
          password: pwd,
        },
        // headers: {
        //   Authorization: "Bearer ${}",
        // },
      });
      alert("로그인이 완료되었습니다.");
    } catch (e) {
      console.log(e);
      // alert("Id 또는 Password를 다시 확인해 주세요.");
      alert("로그인 실패!");
    }
  };

  const loginCheck = () => {
    if (userId === "") {
      alert("Id를 입력해 주세요!");
    } else if (pwd === "") {
      alert("Password를 입력해 주세요!");
    }

    login();
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[350px] text-center">
        <h1 className="mb-14 text-5xl text-white font-bold">Login</h1>
        <form>
          <input
            type="text"
            placeholder="Id"
            value={userId}
            className="w-full p-4 mb-4 rounded-lg outline-rose-500"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Passoword"
            autoComplete="off"
            value={pwd}
            className="w-full p-4 mb-4 rounded-lg outline-rose-500"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <button
            className="w-full p-4 bg-rose-500 text-white rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              loginCheck();
            }}
            onClick={loginCheck}
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
