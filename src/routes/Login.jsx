import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[350px] text-center">
        <h1 className="mb-14 text-5xl text-white font-bold">Login</h1>
        <form>
          <input
            type="text"
            placeholder="Id"
            className="w-full p-4 mb-4 rounded-lg outline-rose-500"
          />
          <input
            type="text"
            placeholder="Passoword"
            className="w-full p-4 mb-4 rounded-lg outline-rose-500"
          />
          <button className="w-full p-4 bg-rose-500 text-white rounded-lg ">
            Login
          </button>
        </form>
        <p className="flex justify-between items-center w-full my-7 text-white text-xl">
          <span className="block w-28 h-[2px] bg-white"></span>
          or
          <span className="block w-28 h-[2px] bg-white"></span>
        </p>
        <button className="w-full p-4 bg-rose-300 text-white rounded-lg ">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
