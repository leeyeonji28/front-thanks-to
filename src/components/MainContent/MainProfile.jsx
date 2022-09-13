import React from "react";
import proimg from "../../assets/images/ding.png";

const MainProfile = () => {
  const userData = {
    userName: "DingDong",
    userSay: "매일매일 감사한 날의 기록 🥰",
    userImg: proimg,
  };
  return (
    <div className="flex justify-center items-center h-[240px]">
      <div className="text-center">
        <img
          src={userData.userImg}
          alt=""
          className="w-16 m-auto border shadow-lg rounded-lg"
        />
        <b className="block text-xl mt-5">{userData.userName}</b>
        <p>{userData.userSay}</p>
        <button className="btn btn-sm mt-5 bg-rose-500 border-0 hover:bg-rose-300">
          Create
        </button>
      </div>
    </div>
  );
};

export default MainProfile;
