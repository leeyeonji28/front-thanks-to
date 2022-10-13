import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";

const PostDetail = ({
  postTitle,
  postContent,
  postData,
  postImg,
  postLike,
  showModal,
  userNick,
  userImg,
}) => {
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);

    console.log("divHeight : ", ref.current.offsetHeight);
    // console.log("ref.current.offsetHeight : ", ref.current.offsetHeight);
  }, [ref]);

  console.log("divHeight : ", divHeight);

  return (
    <div className="fixed w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20">
      {/* 모달 이너 */}
      <div className="modal-box relative max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div
          onClick={() => {
            showModal();
          }}
          className="btn btn-sm btn-ghost absolute left-2 top-2 text-2xl"
        >
          ✕
        </div>
        {/* 포스트 내용 */}
        <div
          ref={ref}
          className={
            divHeight > 500
              ? "max-w-3xl p-10 overflow-y-scroll"
              : "max-w-3xl p-10 overflow-hidden scrollbar-hide"
          }
          //className="max-w-3xl h-[700px] p-10 max-w-3xl p-10 overflow-y-scroll scrollbar-hide"
        >
          <div className="flex justify-between items-center mb-8 pb-8 border-b">
            <div>
              <div className="mr-4">
                <img src={userImg} alt="" />
              </div>
              <b className="block">{userNick}</b>
              <span className="text-gray-500">{postData}</span>
            </div>
            <div className="text-center">
              <FaHeart />
              <span className="mt-2">{postLike}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={postImg} alt="" className="w-full " />
          </div>
          <h3 className="mb-4 text-2xl mt-8">{postTitle}</h3>
          <p>{postContent}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
