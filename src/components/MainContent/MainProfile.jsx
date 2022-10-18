import axios from "axios";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import proimg from "../../assets/images/ding.png";
import { loginState } from "../../recoil/loginState";
import { url } from "../../utile/url";
import CreateModal from "../PostContent/CreateModal";
import { CgSpinner } from "react-icons/cg";
import { useEffect } from "react";

const MainProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const userId = useRecoilValue(loginState);

  const getUserInfo = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${userId}`,
        method: "GET",
      });
      setUserInfo(json.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  console.log(userInfo);
  function showModal() {
    setModal(!modal);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  // 임시 데이터
  const userData = {
    userImg: proimg,
  };

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
    <div className="flex justify-center items-center h-[240px]">
      <div className="text-center">
        <img
          src={userData.userImg}
          alt=""
          className="w-16 m-auto border shadow-lg rounded-lg"
        />
        <b className="block text-xl mt-5">{userInfo.nickName}</b>
        <p>{userInfo.userSay}</p>
        <div
          onClick={() => {
            showModal();
          }}
          className="btn btn-sm mt-5 bg-rose-500 border-0 hover:bg-rose-300"
        >
          Create Post
        </div>
        {modal === true ? (
          <CreateModal
            userImg={userData.userImg}
            userName={userInfo.nickName}
            showModal={showModal}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MainProfile;
