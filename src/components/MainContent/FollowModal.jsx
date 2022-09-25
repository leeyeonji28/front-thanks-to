import React from "react";
import proimg from "../../assets/images/ding.png";
import { HiLockOpen, HiLockClosed } from "react-icons/hi";

const FollowModal = () => {
  // 데모 데이터
  const followData = [
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
    {
      userId: 2,
      userName: "Dingdong",
      userImg: proimg,
      follow: true,
    },
  ];

  return (
    <div className="modal w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* 모달 이너 */}
      <div className="modal-box relative max-w-xl h-[600px]  overflow-hidden">
        <label
          htmlFor="my-follow"
          className="btn btn-sm btn-ghost absolute left-2 top-2 text-2xl"
        >
          ✕
        </label>
        {/* follow list */}
        <div className="max-w-xl h-[552px] p-5 overflow-y-scroll">
          <ul className="flex flex-wrap">
            {followData.map((follow, i) => (
              <li key={i} className="w-[9.6rem] mb-10 text-center">
                <img
                  src={follow.userImg}
                  alt=""
                  className="w-16 ml-11 shadow-md rounded-lg"
                />
                <b className="block my-2">{follow.userName}</b>
                {follow.follow ? (
                  <button className="btn btn-sm bg-yellow-400 border-[0] hover:bg-gray-300">
                    unFollow
                  </button>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowModal;
