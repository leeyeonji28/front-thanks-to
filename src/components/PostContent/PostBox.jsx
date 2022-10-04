import React from "react";

const PostBox = ({ postImg, postTitle, postContent, postDate, userName }) => {
  return (
    <div
      className="w-[376px] rounded-lg bg-white
    mb-6"
    >
      <div>
        <img src={postImg} alt="" />
      </div>
      <b>{postTitle}</b>
      <p>{postContent}</p>
      <p>{postDate}</p>
      <div>user 정보</div>
    </div>
  );
};

export default PostBox;
