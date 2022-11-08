import React, { useState } from "react";
import UserPostDetail from "../PostContent/UserPostDetail";
import MyPostDetail from "./MyPostDetail";

const MyPostBox = ({
  postId,
  postTitle,
  postContent,
  postDate,
  postImg,
  postLike,
  postLock,
  userNick,
  userImg,
  postUserId,
  getUserInfo,
}) => {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  return (
    <div className="group">
      <div className="flex flex-wrap">
        <b className="w-[104px] h-11 mr-5 text-center font-semibold leading-10 rounded-lg group-even:bg-gray-200 group-odd:bg-rose-100">
          {postDate}
        </b>
        <div
          className="cursor-pointer"
          onClick={() => {
            showModal();
          }}
        >
          <span className="block w-[738px] my-5 border-b-0 border-dashed border-2"></span>
          <div className="w-[738px] mb-20 p-5 rounded-lg bg-gray-50">
            <h5 className="mb-2 text-lg font-semibold">{postTitle}</h5>
            <p>{postContent}</p>
          </div>
        </div>
      </div>

      {modal === true ? (
        <MyPostDetail
          postId={postId}
          postTitle={postTitle}
          postContent={postContent}
          postDate={postDate}
          postImg={postImg}
          postLike={postLike}
          postLock={postLock}
          userNick={userNick}
          userImg={userImg}
          postUserId={postUserId}
          showModal={showModal}
          getUserInfo={getUserInfo}
        />
      ) : null}
    </div>
  );
};

export default MyPostBox;
