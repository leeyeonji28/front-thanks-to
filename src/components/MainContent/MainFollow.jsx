import React from "react";
import proimg from "../../assets/images/ding.png";
import { AiOutlineDoubleRight } from "react-icons/ai";

const MainFollow = () => {
  // 데모 데이터
  const followData = [
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
    {
      userId: 2,
      userImg: proimg,
    },
  ];
  return (
    <div className="p-7">
      <h3 className="flex justify-between items-center mb-5">
        <div>
          <b className="text-xl mr-2">Follow</b>
          <span className="text-gray-400">{followData.length}</span>
        </div>
        <p className="inline-block ml-5 text-gray-400 cursor-pointer">
          전체보기
          <AiOutlineDoubleRight className="inline-block" />
        </p>
      </h3>
      <ul className="flex flex-wrap justify-around">
        {followData.map((follow, i) => (
          <li key={i} className="w-12 shadow-md mb-4 rounded-lg">
            <img src={follow.userImg} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFollow;
