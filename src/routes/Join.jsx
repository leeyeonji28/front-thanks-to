import React, { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Join = () => {
  const [imageSrc, setImageSrc] = useState();
  const [files, setFiles] = useState([]);
  const [showPwd, setShowPwd] = useState(false);

  const togglePass = (e) => {
    e.preventDefault();

    setShowPwd(!showPwd);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const previewPostImg = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };

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
          <div className="relative">
            <input
              type={showPwd ? "text" : "Password"}
              placeholder="Password"
              className="block w-[350px] p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
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
          <input
            type="text"
            placeholder="Nick Name"
            className="block w-[350px] p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          <div className="relative">
            <label
              htmlFor="selector_img"
              className="flex justify-center items-center w-[350px] h-52 mb-4 rounded-lg bg-gray-300 cursor-pointer"
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
              onChange={(e) => {
                previewPostImg(e);
                handleUpload(e);
              }}
              className="hidden"
            />
            <div
              className={
                imageSrc
                  ? "absolute top-0 w-[350px] h-52 rounded-lg bg-white overflow-hidden"
                  : "hidden"
              }
            >
              <img
                src={imageSrc}
                alt="preview-img"
                className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-[350px]"
              />
            </div>
          </div>
          <textarea
            placeholder="About you"
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
