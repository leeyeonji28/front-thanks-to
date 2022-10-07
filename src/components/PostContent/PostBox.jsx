import React from "react";
import { IoHeartSharp } from "react-icons/io5";

const PostBox = ({
  postImg,
  postTitle,
  postContent,
  postDate,
  postLike,
  user,
}) => {
  console.log({ user });
  return (
    <div className="w-full rounded-lg bg-white mb-6">
      {postImg != "" ? (
        <div className="flex justify-center items-center h-72 rounded-t-lg overflow-hidden">
          <img src={postImg} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="p-3">
        <b className="block mb-3 text-xl">{postTitle}</b>
        <p>
          {postContent.length > 200
            ? `${postContent.slice(0, 200)}...`
            : postContent}
        </p>
        <p className="mt-3 text-gray-400">{postDate}</p>
      </div>
      <div className="p-3 border-t">
        {user != null ? (
          <div className="flex justify-between items-center">
            <img src="" alt="" />
            <b>{user.nickName}</b>
            <div className="text-gray-500">
              <IoHeartSharp className="inline-block mr-2 text-xl" />
              <span>{postLike}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostBox;
