import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { url } from "../../utile/url";
import { IoNotifications } from "react-icons/io5";
import { loginState } from "../../recoil/loginState";
import { useRecoilValue } from "recoil";

const MyPostDetail = ({
  postId,
  postTitle,
  postContent,
  postDate,
  postImg,
  postLike,
  showModal,
  userNick,
  userImg,
  postUserId,
  getUserInfo,
}) => {
  const [divHeight, setDivHeight] = useState(0);
  const [titleValue, setTitleValue] = useState(postTitle);
  const [contentValue, setContentValue] = useState(postContent);
  const [modify, setModify] = useState(false);
  const ref = useRef(null);
  const userId = useRecoilValue(loginState);

  const boxHeight = () => {
    setDivHeight(ref.current.scrollHeight);
  };

  useEffect(() => {
    boxHeight();
  }, [ref]);

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
          {userId == postUserId ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <FiMoreHorizontal className="text-3xl" />
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow-[0px_0px_30px_-15px_rgba(0,0,0,0.3)] menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    setModify(!modify);
                  }}
                >
                  <p className="p-4 text-base active:bg-gray-400">수정하기</p>
                </li>
                <li>
                  <p
                    onClick={async () => {
                      try {
                        await axios({
                          url: `${url}/api/post/delete/${postId}`,
                          method: "DELETE",
                        });
                        alert("게시글이 삭제되었습니다.");
                        showModal();
                        getUserInfo();
                      } catch (e) {
                        alert("삭제할 수 없습니다.");
                      }
                    }}
                    className="p-4 text-base text-red-400 active:bg-rose-400 active:text-white"
                  >
                    삭제하기
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
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
          <div className="flex justify-between items-center pb-8 border-b">
            <div className="flex items-center">
              <div className="w-16 mr-4 border shadow-lg rounded-lg overflow-hidden">
                <img src={userImg} alt="" className="h-16" />
              </div>
              <div>
                <b className="block text-xl">{userNick}</b>
                <span className="text-gray-500">{postDate}</span>
              </div>
            </div>
            <div
              className="flex items-center text-xl cursor-pointer"
              onClick={async () => {
                try {
                  await axios({
                    url: `${url}/api/post/like/${postId}`,
                    method: "POST",
                  });
                  getUserInfo();
                } catch (e) {
                  alert("좋아요를 누를 수 없습니다.");
                }
              }}
            >
              <FaHeart />
              <span className="ml-2 text-lg">{postLike}</span>
            </div>
          </div>
          {modify === true ? (
            <div className="flex items-center mb-6 p-3 rounded-lg bg-gray-500">
              <IoNotifications className="text-xl text-white" />
              <p className="ml-6 text-lg text-white">
                게시글을 수정해 주세요. 사진은 변경할 수 없습니다.
              </p>
            </div>
          ) : (
            ""
          )}
          {postImg === "" ? (
            ""
          ) : (
            <div className="overflow-hidden mt-8 rounded-2xl">
              <img
                src={postImg}
                alt=""
                className="w-full"
                onLoad={() => {
                  boxHeight();
                }}
              />
            </div>
          )}

          {modify === true ? (
            <input
              type="text"
              value={titleValue}
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
              className="block w-full p-4 my-4 rounded-lg border border-gray-300 outline-rose-500"
            ></input>
          ) : (
            <h3 className="mb-4 text-2xl mt-8">{postTitle}</h3>
          )}
          {modify === true ? (
            <textarea
              value={contentValue}
              onChange={(e) => {
                setContentValue(e.target.value);
              }}
              className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
            ></textarea>
          ) : (
            <p>{postContent}</p>
          )}
          {modify === true ? (
            <button
              className="w-full p-4 mt-10 bg-rose-500 text-white rounded-lg hover:bg-rose-300"
              onClick={async () => {
                try {
                  await axios({
                    url: `${url}/api/post/update/${postId}`,
                    method: "POST",
                    data: {
                      postTitle: titleValue,
                      postContent: contentValue,
                      postImg: postImg,
                    },
                  });
                  alert("게시글이 수정되었습니다.");
                  showModal();
                  getUserInfo();
                } catch (e) {
                  alert("수정할 수 없습니다.");
                }
              }}
            >
              Submit
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPostDetail;
