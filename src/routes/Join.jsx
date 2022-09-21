import React from "react";

const Join = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[350px] text-center">
        <h1 className="mb-14 text-5xl text-white font-bold">Create Account</h1>
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
      </div>
    </div>
  );
};

export default Join;
