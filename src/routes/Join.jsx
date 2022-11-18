import React, { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { url } from "../utile/url";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const [imageSrc, setImageSrc] = useState();
  const [files, setFiles] = useState([]);
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState({
    username: "",
    password: "",
    nickName: "",
    userSay: "",
    profileImg: "",
  });

  const joinCheck = () => {
    if (joinData.username === "") {
      alert("아이디를 입력해주세요.");
    } else if (joinData.password === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (joinData.nickName === "") {
      alert("닉네임을 입력해주세요.");
    } else if (joinData.userSay === "") {
      alert("소개말을 입력해주세요.");
    } else if (imageSrc === "") {
      alert("프로필 사진을 등록해주세요.");
    }
  };

  const togglePass = (e) => {
    e.preventDefault();
    setShowPwd(!showPwd);
  };

  const userJoin = async () => {
    const formData = new FormData();
    if (files.length !== 0) {
      formData.append("profileImg", files.length && files[0].uploadedFile);
    } else {
      const fileNull = new Blob([JSON.stringify("")], {
        type: "application/json",
      });
      formData.append("profileImg", fileNull);
    }

    const value = {
      username: joinData.username,
      password: joinData.password,
      nickName: joinData.nickName,
      userSay: joinData.userSay,
      profileImg: "",
    };

    const blob = new Blob([JSON.stringify(value)], {
      type: "application/json",
    });

    formData.append("user", blob);
    try {
      await axios({
        url: `${url}/api/join`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      alert("회원가입이 완료되었습니다.");
      navigate(`/login`);
    } catch (e) {
      alert("다른 아이디를 입력해 주세요.");
    }
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
    <div className="flex m-auto w-full h-full">
      <div className="2xl:w-[574px] w-[350px] 2xl:py-12 2xl:px-28 p-10 m-auto text-center bg-white rounded-lg">
        <h1 className="2xl:mb-14 mb-7 2xl:text-5xl text-3xl text-rose-500 font-bold">
          Create Account
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            joinCheck();
            userJoin();
          }}
        >
          <input
            type="text"
            placeholder="Id"
            className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
            onChange={(e) => {
              setJoinData({
                ...joinData,
                username: e.target.value,
              });
            }}
          />
          <div className="relative">
            <input
              type={showPwd ? "text" : "Password"}
              placeholder="Password"
              className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
              onChange={(e) => {
                setJoinData({
                  ...joinData,
                  password: e.target.value,
                });
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
          <input
            type="text"
            placeholder="Nick Name"
            maxLength={6}
            className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
            onChange={(e) => {
              setJoinData({
                ...joinData,
                nickName: e.target.value,
              });
            }}
          />
          <div className="relative">
            <div className="flex justify-center items-center w-full h-44 mb-4 border border-gray-300 rounded-lg cursor-pointer z-10">
              <div>
                <p className="text-gray-400">Image</p>
              </div>
            </div>
            <label
              htmlFor="selector_img"
              className="absolute bottom-3 right-3 btn btn-circle bg-gray-400 border-gray-400 z-20"
            >
              <div>
                <HiOutlineCamera className="m-auto text-2xl text-white " />
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
                  ? "absolute top-0 w-full h-44 rounded-lg bg-white overflow-hidden"
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
            className="block w-full p-4 2xl:mb-12 mb-7 rounded-lg border border-gray-300 outline-rose-500"
            maxLength={20}
            onChange={(e) => {
              setJoinData({
                ...joinData,
                userSay: e.target.value,
              });
            }}
          />
          <button className="w-full p-4 bg-rose-500 text-white rounded-lg ">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
