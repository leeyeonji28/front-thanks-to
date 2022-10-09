import React from "react";

const UserPostBox = ({ postTitle, postContent, postData }) => {
  return (
    <div className="group flex flex-wrap">
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
  );
};

export default UserPostBox;
