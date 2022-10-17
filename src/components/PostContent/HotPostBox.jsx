import React from "react";

const HotPostBox = ({
  postImg,
  postTitle,
  postContent,
  postDate,
  userName,
}) => {
  return (
    <div className="flex w-full h-[270px] rounded-lg bg-white mb-5">
      {postImg != "" ? (
        <div className="flex justify-center items-center w-[800px] overflow-hidden">
          <img src={postImg} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="w-full">
        <div className="p-3">
          <b className="block mb-3 text-xl">{postTitle}</b>
          <p className="h-28">
            {postContent.length > 300
              ? `${postContent.slice(0, 300)}...`
              : postContent}
          </p>
          <p className="mt-3 text-gray-400">{postDate}</p>
        </div>
        <div className="p-3 border-t">user 정보</div>
      </div>
    </div>
  );
};

export default HotPostBox;
