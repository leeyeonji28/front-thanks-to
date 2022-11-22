import React, { useState } from "react";
import UserPostDetail from "./UserPostDetail";

const UserPostBox = ({
  postId,
  postTitle,
  postContent,
  postDate,
  postImg,
  postLike,
  postLock,
  userNick,
  userImg,
  getUserPostList,
}) => {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  return (
    <div className="group">
      <div className="lg:flex lg:flex-wrap lg:justify-between block">
        <b className="lg:w-[20%] h-11 lg:py-2 lg:px-0 p-2 lg:text-base 2xl:text-xl text-base text-center font-semibold leading-10 rounded-lg group-even:bg-gray-200 group-odd:bg-rose-100">
          {postDate}
        </b>
        <div
          className="lg:w-[78%] w-full cursor-pointer"
          onClick={() => {
            showModal();
          }}
        >
          <span className="block w-full my-5 border-b-0 border-dashed border-2"></span>
          <div className="w-full lg:mb-20 mb-10 p-5 rounded-lg bg-gray-50">
            <h5 className="mb-2 lg:text-base xl:text-lg font-semibold">
              {postTitle}
            </h5>
            <p>{postContent}</p>
          </div>
        </div>
      </div>

      {modal === true ? (
        <UserPostDetail
          postId={postId}
          postTitle={postTitle}
          postContent={postContent}
          postDate={postDate}
          postImg={postImg}
          postLike={postLike}
          postLock={postLock}
          userNick={userNick}
          userImg={userImg}
          showModal={showModal}
          getUserPostList={getUserPostList}
        />
      ) : null}
    </div>
  );
};

export default UserPostBox;
