import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import { url } from "../../utile/url";
import PostDetail from "./PostDetail";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";

const PostBox = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [postData, setPostData] = useState("");
  const [postUserId, setPostUserId] = useState();
  const [userNick, setUserNick] = useState();
  const [userImg, setUserImg] = useState();
  const [modal, setModal] = useState(false);
  const userId = useRecoilValue(loginState);

  const getPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/detail/${postId}`,
        method: "GET",
      });
      setPostData(json.data);
      setIsLoading(false);
      setUserNick(json.data.user.nickName);
      setUserImg(json.data.user.profileImg);
      setPostUserId(json.data.user.id);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  function showModal() {
    if (postData.postLock === "true") {
      if (postUserId == userId) {
        setModal(!modal);
      } else {
        alert("비밀글은 작성자만 열람 가능합니다.");
      }
    } else {
      setModal(!modal);
    }
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">{error.message}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">
          <CgSpinner className="m-auto mb-2 animate-spin text-3xl" />
          Loading
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="w-full rounded-lg bg-white mb-6 cursor-pointer"
        onClick={() => {
          showModal();
        }}
      >
        {postData.postLock === "false" ? (
          <div>
            {postData.postImg !== "" ? (
              <div className="flex justify-center items-center h-auto rounded-t-lg overflow-hidden">
                <img src={postData.postImg} alt="" />
              </div>
            ) : (
              ""
            )}
            <div className="p-3">
              <b className="block mb-3 text-xl">{postData.postTitle}</b>
              <p>
                {postData.postContent.length > 200
                  ? `${postData.postContent.slice(0, 200)}...`
                  : postData.postContent}
              </p>
              <p className="mt-3 text-gray-400">{postData.postDate}</p>
            </div>
            <div className="p-3 border-t">
              <div className="flex justify-between items-center">
                <b>{userNick}</b>
                <div className="text-gray-500">
                  <IoHeartSharp className="inline-block mr-2 text-xl" />
                  <span>{postData.postLike}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-3">
              <b className="block mb-3 text-xl">비밀글 입니다.</b>
              <p className="mt-3 text-gray-400">{postData.postDate}</p>
            </div>
            <div className="p-3 border-t">
              <b>{userNick}</b>
            </div>
          </div>
        )}
      </div>

      {modal === true ? (
        <PostDetail
          postId={postId}
          postTitle={postData.postTitle}
          postContent={postData.postContent}
          postDate={postData.postDate}
          postImg={postData.postImg}
          postLike={postData.postLike}
          postLock={postData.postLock}
          showModal={showModal}
          postUserId={postUserId}
          userNick={userNick}
          userImg={userImg}
          getPostList={getPostList}
        />
      ) : null}
    </div>
  );
};

export default PostBox;
