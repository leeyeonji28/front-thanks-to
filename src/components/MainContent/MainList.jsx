import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { url } from "../../utile/url";
import UserPostBox from "./UserPostBox";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";

const MainList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [getUserPostData, setGetUserPostData] = useState([]);
  const userId = useRecoilValue(loginState);
  const [listLenght, setListLenght] = useState();
  const [userNick, setUserNick] = useState();
  const [userImg, setUserImg] = useState();

  const getUserPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${userId}`,
        method: "GET",
      });
      setGetUserPostData(json.data.postList);
      setIsLoading(false);
      setListLenght(json.data.postList.length);
      setUserNick(json.data.nickName);
      setUserImg(json.data.profileImg);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getUserPostList();
  }, []);

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
      <div>
        <h3 className="mb-10">
          <b className="text-xl text-rose-500">Thanks to</b>
          <br />
          그동안 감사했던 기록들을 함께 보아요 😊
        </h3>
        {getUserPostData.length == 0 ? (
          <div className="flex justify-center items-center h-[330px]">
            아직 게시글이 없습니다.
          </div>
        ) : (
          <div>
            {getUserPostData
              .slice(listLenght - 30, listLenght)
              .reverse()
              .map((list, i) => (
                <UserPostBox
                  key={i}
                  postId={list.id}
                  postTitle={list.postTitle}
                  postContent={list.postContent}
                  postImg={list.postImg}
                  postDate={list.postDate}
                  postLike={list.postLike}
                  postLock={list.postLock}
                  userNick={userNick}
                  userImg={userImg}
                  getUserPostList={getUserPostList}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainList;
