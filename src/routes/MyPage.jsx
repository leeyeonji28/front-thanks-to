import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { CgSpinner } from "react-icons/cg";
import { url } from "../utile/url";
import { useRecoilValue } from "recoil";
import { loginState } from "../recoil/loginState";
import { useNavigate } from "react-router-dom";
import { HiChevronDoubleDown } from "react-icons/hi";
import MyPostBox from "../components/MypageContent/MyPostBox";

const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userPostList, setUserPostList] = useState([]);
  const userId = useRecoilValue(loginState);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${userId}`,
        method: "GET",
      });
      setUserInfo(json.data);
      setUserPostList(json.data.postList);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getUserInfo();
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
    <Layout>
      <div className="w-[1170px] h-[855px] bg-white rounded-lg">
        <h3 className="p-7 pb-0 text-2xl font-bold">Profile</h3>
        <div className="flex">
          <div className="p-7">
            <div className="w-80 h-80 border shadow-lg rounded-lg overflow-hidden">
              <img src={userInfo.profileImg} alt="" className="h-80" />
            </div>
            <div className="w-80 border-2 rounded-lg p-4 mt-10 mb-10 outline-none">
              <p>
                <b>Your Name</b> : {userInfo.username}
              </p>
              <p className="mt-2">
                <b>Your Nick Name</b> : {userInfo.nickName}
              </p>
              <p className="mt-2">
                <b>Aout you</b> : {userInfo.userSay}
              </p>
            </div>
          </div>
          {/* <button
          className="btn bg-rose-500 border-0 mt-16 mb-20 ml-[1080px] hover:bg-rose-300"
          onClick={() => {
            navigate(`/mypage/${userId}/modify`);
          }}
        >
          Edit
        </button> */}
          <div className="relative">
            <p className="pt-7 pl-7 mb-7 text-lg">
              {userInfo.username}님의 일기를 확인해 보아요.
              <br />
              <span className="text-base">
                (스크롤을 내리면 더 많은 일기를 볼 수 있습니다!)
              </span>
            </p>
            <div className="h-[655px] p-7 pt-0 overflow-y-scroll">
              {userPostList.reverse().map((list, i) => (
                <MyPostBox
                  key={i}
                  postId={list.id}
                  postTitle={list.postTitle}
                  postContent={list.postContent}
                  postImg={list.postImg}
                  postDate={list.postDate}
                  postLike={list.postLike}
                  userNick={userInfo.nickName}
                  userImg={userInfo.profileImg}
                  getUserInfo={getUserInfo}
                />
              ))}
            </div>
            <div className="absolute top-[720px] left-[390px] animate-bounce">
              <HiChevronDoubleDown className="text-3xl text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
