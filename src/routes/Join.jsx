import React from "react";
import { HiOutlineCamera } from "react-icons/hi";

const Join = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="py-12 px-28 text-center bg-white rounded-lg">
        <h1 className="mb-14 text-5xl text-rose-500 font-bold">
          Create Account
        </h1>
        <form>
          <input
            type="text"
            placeholder="Id"
            className="block w-[350px] p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          <input
            type="text"
            placeholder="Passoword"
            className="block w-[350px] p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          <input
            type="text"
            placeholder="Nick Name"
            className="block w-[350px] p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          <div>
            <label
              htmlFor="selector_img"
              className="flex justify-center items-center w-[350px] h-32 mb-4 rounded-lg bg-gray-300 cursor-pointer"
            >
              <div>
                <HiOutlineCamera className="m-auto text-5xl text-white " />
                <p className="text-white">Profile Image</p>
              </div>
            </label>
            <input
              type="file"
              accept="image/*"
              id="selector_img"
              encType="multipart/form-data"
              multiple="multiple"
              // onChange={(e) => {
              //   previewPostImg(e);
              //   handleUpload(e);
              // }}
              className="hidden"
            />
          </div>
          <textarea
            placeholder="Nick Name"
            className="block w-[350px] p-4 mb-12 rounded-lg border border-gray-300 outline-rose-500"
          />
          <button className="w-[350px] p-4 bg-rose-500 text-white rounded-lg ">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
