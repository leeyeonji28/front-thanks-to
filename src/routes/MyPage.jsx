import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { CgSpinner } from "react-icons/cg";
import { url } from "../utile/url";
import { useParams } from "react-router-dom";
import { HiChevronDoubleDown } from "react-icons/hi";
import MyPostBox from "../components/MypageContent/MyPostBox";

const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userPostList, setUserPostList] = useState([]);
  const { myId } = useParams();

  const getUserInfo = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${myId}`,
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
      <div className="2xl:w-[1180px] xl:w-[1080px] w-full 2xl:h-[855px] 2xl:h-[855px] min-h-[698px] bg-white rounded-lg">
        <h3 className="p-7 pb-0 text-2xl font-bold">Profile</h3>
        <div className="lg:flex block">
          <div className="p-7 lg:block sm:flex sm:justify-between sm:items-end sm:mb-10">
            <div className="xl:w-80 lg:w-60 sm:w-[48%] w-full xl:h-80 lg:h-auto border shadow-lg rounded-lg overflow-hidden">
              <img src={userInfo.profileImg} alt="" className="w-full" />
            </div>
            <div className="xl:w-80 lg:w-60 sm:w-[48%] w-full sm:h-full lg:h-auto border-2 rounded-lg p-4 mt-10 sm:mb-0 mb-10 outline-none">
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
          <div className="relative w-full md:px-7 md:pb-7">
            {userPostList.length === 0 ? (
              <div className="flex justify-center items-center w-full min-h-[400px] mt-7 border">
                아직 게시글이 없습니다.
              </div>
            ) : (
              <div>
                <p className="lg:pt-7 pt-0 pl-7 mb-7 lg:text-lg text-xl">
                  {userInfo.username}님의 일기를 확인해 보아요.
                  <br />
                  <span className="text-base lg:block hidden">
                    (스크롤을 내리면 더 많은 일기를 볼 수 있습니다!)
                  </span>
                </p>
                <div className="2xl:h-[655px] lg:h-[498px] h-auto p-7 pt-0 lg:overflow-y-scroll lg:scrollbar-hide">
                  {userPostList.reverse().map((list, i) => (
                    <MyPostBox
                      key={i}
                      postId={list.id}
                      postTitle={list.postTitle}
                      postContent={list.postContent}
                      postImg={list.postImg}
                      postDate={list.postDate}
                      postLike={list.postLike}
                      postLock={list.postLock}
                      userNick={userInfo.nickName}
                      userImg={userInfo.profileImg}
                      postUserId={userInfo.id}
                      getUserInfo={getUserInfo}
                    />
                  ))}
                </div>
                {/* <div className="absolute 2xl:block hidden top-[720px] left-[390px] animate-bounce">
                  <HiChevronDoubleDown className="text-3xl text-gray-300" />
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
