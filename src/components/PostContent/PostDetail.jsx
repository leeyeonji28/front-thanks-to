import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { url } from "../../utile/url";

const PostDetail = ({
  postId,
  postTitle,
  postContent,
  postDate,
  postImg,
  postLike,
  showModal,
  userNick,
  userImg,
}) => {
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);

  const boxHeight = () => {
    setDivHeight(ref.current.scrollHeight);
  };

  useEffect(() => {
    boxHeight();
  }, [ref]);

  console.log(user);
  return (
    <div className="fixed w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20">
      {/* 모달 이너 */}
      <div className="modal-box relative max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden p-10 pt-14">
        <div className="w-full flex justify-between items-center absolute left-0 top-2 px-2">
          <div
            onClick={() => {
              showModal();
            }}
            className="btn btn btn-circle btn-ghost text-2xl"
          >
            ✕
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FiMoreHorizontal className="text-3xl" />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow-[0px_0px_30px_-15px_rgba(0,0,0,0.3)] menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="p-4 text-base">수정하기</p>
              </li>
              <li>
                <p
                  onClick={async () => {
                    try {
                      const json = await axios({
                        url: `${url}/api/post/delete/${postId}`,
                        method: "DELETE",
                      });
                      alert("게시글이 삭제되었습니다.");
                      showModal();
                    } catch (e) {
                      alert("삭제할 수 없습니다.");
                    }
                  }}
                  className="p-4 text-base text-red-400"
                >
                  삭제하기
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* 포스트 내용 */}
        <div
          ref={ref}
          className={
            divHeight >= 500
              ? "max-w-3xl h-[600px] p-4 overflow-y-scroll"
              : "max-w-3xl p-4"
          }
        >
          <div className="flex justify-between items-center mb-8 pb-8 border-b">
            <div className="flex items-center">
              <div className="w-16 mr-4 border shadow-lg rounded-lg overflow-hidden">
                <img src={userImg} alt="" className="h-16" />
              </div>
              <div>
                <b className="block text-xl">{userNick}</b>
                <span className="text-gray-500">{postDate}</span>
              </div>
            </div>
            <div className="flex items-center text-xl">
              <FaHeart />
              <span className="ml-2 text-lg">{postLike}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={postImg}
              alt=""
              className="w-full"
              onLoad={() => {
                boxHeight();
              }}
            />
          </div>

          <h3 className="mb-4 text-2xl mt-8">{postTitle}</h3>
          <p>{postContent}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
