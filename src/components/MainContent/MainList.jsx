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

  const getUserPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${userId}`,
        method: "GET",
      });
      setGetUserPostData(json.data.postList);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    // setUserId(localStorage.getItem("id"));
    getUserPostList();
  }, []);

  console.log(getUserPostData);
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
        <div>
          <ul>
            {getUserPostData.map((list, i) => (
              <UserPostBox
                key={i}
                postTitle={list.postTitle}
                postContent={list.postContent}
                postData={list.postDate}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainList;
