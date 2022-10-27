import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoHeartSharp } from "react-icons/io5";
import { url } from "../../utile/url";
import HotDetail from "../PostContent/HotDetail";

const HotPostBox = ({ postId, getPostList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [hotData, setHotData] = useState("");
  const [userNick, setUserNick] = useState();
  const [userImg, setUserImg] = useState();
  const [modal, setModal] = useState(false);

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
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getHotPostList();
  }, []);

  function showModal() {
    setModal(!modal);
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
        className="flex w-full h-[270px] rounded-lg bg-white mb-5 cursor-pointer"
        onClick={() => {
          showModal();
        }}
      >
        {hotData.postImg !== "" ? (
          <div className="flex justify-center items-center w-[800px] overflow-hidden">
            <img src={hotData.postImg} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <div className="p-3">
            <b className="block mb-3 text-xl">{hotData.postTitle}</b>
            <p className="h-28">
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

      {modal === true ? (
        <HotDetail
          postId={postId}
          postTitle={hotData.postTitle}
          postContent={hotData.postContent}
          postDate={hotData.postDate}
          postImg={hotData.postImg}
          postLike={hotData.postLike}
          showModal={showModal}
          userNick={userNick}
          userImg={userImg}
          getHotPostList={getHotPostList}
        />
      ) : null}
    </div>
  );
};

export default HotPostBox;
