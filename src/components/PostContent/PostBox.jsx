import React from "react";

const PostBox = ({ postImg, postTitle, postContent, postDate, userName }) => {
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
      <div className="p-3 border-t">user 정보</div>
    </div>
  );
};

export default PostBox;
