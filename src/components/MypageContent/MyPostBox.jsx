import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";
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
  const userId = useRecoilValue(loginState);

  function showModal() {
    if (postLock === "true") {
      if (postUserId == userId) {
        setModal(!modal);
      } else {
        alert("비밀글은 작성자만 열람 가능합니다.");
      }
    } else {
      setModal(!modal);
    }
  }

  return (
    <div className="group">
      <div className="lg:flex lg:flex-wrap block w-full">
        <b className="xl:w-[130px] lg:w-[104px] h-11 mr-5 lg:py-2 lg:px-0 p-2 lg:text-base 2xl:text-xl text-base text-center font-semibold leading-10 rounded-lg group-even:bg-gray-200 group-odd:bg-rose-100">
          {postDate}
        </b>
        <div
          className="w-full cursor-pointer"
          onClick={() => {
            showModal();
          }}
        >
          {postLock === "false" ? (
            <div>
              <span className="block w-full my-5 border-b-0 border-dashed border-2"></span>
              <div className="w-full lg:mb-20 mb-10 p-5 rounded-lg bg-gray-50">
                <h5 className="mb-2 text-lg font-semibold">{postTitle}</h5>
                <p>{postContent}</p>
              </div>
            </div>
          ) : (
            <div>
              <span className="block w-full my-5 border-b-0 border-dashed border-2"></span>
              <div className="w-full lg:mb-20 mb-10 p-5 rounded-lg bg-gray-50">
                <h5 className="mb-2 text-lg font-semibold">비밀글 입니다.</h5>
              </div>
            </div>
          )}
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
