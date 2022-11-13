import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoHeartSharp } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";
import { url } from "../../utile/url";
import HotDetail from "../HotPostContent/HotDetail";

const HotPostBox = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [hotData, setHotData] = useState("");
  const [postUserId, setPostUserId] = useState();
  const [userNick, setUserNick] = useState();
  const [userImg, setUserImg] = useState();
  const [modal, setModal] = useState(false);
  const userId = useRecoilValue(loginState);

  const getHotPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/detail/${postId}`,
        method: "GET",
      });
      setHotData(json.data);
      setIsLoading(false);
      setUserNick(json.data.user.nickName);
      setUserImg(json.data.user.profileImg);
      setPostUserId(json.data.user.id);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getHotPostList();
  }, []);

  function showModal() {
    if (hotData.postLock === "true") {
      if (postUserId === userId) {
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
        className="flex w-full sm:h-[270px] rounded-lg bg-white mb-5 cursor-pointer"
        onClick={() => {
          showModal();
        }}
      >
        {hotData.postLock === "false" ? (
          <div className="w-full">
            {hotData.postImg !== "" ? (
              <div className="flex justify-center items-center sm:w-[800px] w-full overflow-hidden sm:rounded-none rounded-t-lg">
                <img src={hotData.postImg} alt="" />
              </div>
            ) : (
              ""
            )}
            <div className="w-full">
              <div className="p-3">
                <b className="block mb-3 text-xl">{hotData.postTitle}</b>
                <p className="sm:h-28">
                  {hotData.postContent.length > 300
                    ? `${hotData.postContent.slice(0, 300)}...`
                    : hotData.postContent}
                </p>
                <p className="mt-3 text-gray-400">{hotData.postDate}</p>
              </div>
              <div className="p-3 border-t">
                <div className="flex justify-between items-center">
                  <b>{userNick}</b>
                  <div className="text-gray-500">
                    <IoHeartSharp className="inline-block mr-2 text-xl" />
                    <span>{hotData.postLike}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="p-3">
              <b className="block mb-3 text-xl">비밀글 입니다.</b>
              <p className="h-28"></p>
              <p className="mt-3 text-gray-400">{hotData.postDate}</p>
            </div>
            <div className="p-3 border-t">
              <b>{userNick}</b>
            </div>
          </div>
        )}
      </div>

      {modal === true ? (
        <HotDetail
          postId={postId}
          postTitle={hotData.postTitle}
          postContent={hotData.postContent}
          postDate={hotData.postDate}
          postImg={hotData.postImg}
          postLike={hotData.postLike}
          postLock={hotData.postLock}
          showModal={showModal}
          postUserId={postUserId}
          userNick={userNick}
          userImg={userImg}
          getHotPostList={getHotPostList}
        />
      ) : null}
    </div>
  );
};

export default HotPostBox;
