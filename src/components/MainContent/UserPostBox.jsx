import React, { useState } from "react";
import PostDetail from "../PostContent/PostDetail";

const UserPostBox = ({
  postId,
  postTitle,
  postContent,
  postData,
  postImg,
  postLike,
  userNick,
  userImg,
}) => {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  return (
    <div
      className="group"
      onClick={() => {
        showModal();
      }}
    >
      <div className="flex flex-wrap cursor-pointer">
        <b className="w-[104px] h-11 mr-5 text-center font-semibold leading-10 rounded-lg group-even:bg-gray-200 group-odd:bg-rose-100">
          {postData}
        </b>
        <div>
          <span className="block w-[650px] my-5 border-b-0 border-dashed border-2"></span>
          <div className="w-[650px] mb-20 p-5 rounded-lg bg-gray-50">
            <h5 className="mb-2 text-lg font-semibold">{postTitle}</h5>
            <p>{postContent}</p>
          </div>
        </div>
      </div>

      {modal === true ? (
        <PostDetail
          postTitle={postTitle}
          postContent={postContent}
          postData={postData}
          postImg={postImg}
          postLike={postLike}
          userNick={userNick}
          userImg={userImg}
          showModal={showModal}
        />
      ) : null}
    </div>
  );
};

export default UserPostBox;
