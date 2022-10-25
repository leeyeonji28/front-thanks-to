import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { CgSpinner } from "react-icons/cg";
import { url } from "../utile/url";
import { useRecoilValue } from "recoil";
import { loginState } from "../recoil/loginState";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const userId = useRecoilValue(loginState);
  const navigate = useNavigate();

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
        <div className="flex justify-between p-7">
          <div className="w-80 h-80 border shadow-lg rounded-lg overflow-hidden">
            <img src={userInfo.profileImg} alt="" className="h-80" />
          </div>
          <div>
            <div>
              <b>Your Name</b>
              <p className="w-[730px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none">
                {userInfo.username}
              </p>
            </div>
            <div>
              <b>Your Nick Name</b>
              <p className="w-[730px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none">
                {userInfo.nickName}
              </p>
            </div>
            <div>
              <b>Aout you</b>
              <p className="w-[730px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none">
                {userInfo.userSay}
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn bg-rose-500 border-0 mt-16 mb-20 ml-[1080px] hover:bg-rose-300"
          onClick={() => {
            navigate(`/mypage/${userId}/modify`);
          }}
        >
          Edit
        </button>
        <div className="flex justify-between items-center mt-8 p-7 pt-8 border-t-2">
          <h4 className="text-rose-500 font-bold text-2xl">Thanks to</h4>
          <ul className="flex">
            <div>
              <li className="mr-8">
                <b className="inline-block w-14">Add</b>
                대전광역시 유성구 봉명동 123번지 Thanks to
              </li>
              <li>
                <b className="inline-block w-14">Mail</b>
                thanks2@thanksto.com
              </li>
            </div>
            <div>
              <li>
                <b className="inline-block w-14">Tel</b>
                042 - 123 - 1234 / 042 - 456 - 4567
              </li>
              <li>
                <b className="inline-block w-14">Fax</b>
                070 - 1234 - 1234
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
