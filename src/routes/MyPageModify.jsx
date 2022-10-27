import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { CgSpinner } from "react-icons/cg";
import { url } from "../utile/url";
import { useRecoilValue } from "recoil";
import { loginState } from "../recoil/loginState";

const MyPageModify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
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
          <div>
            <div className="w-60 h-60 border shadow-lg rounded-lg overflow-hidden">
              <img src={userInfo.profileImg} alt="" className="h-60" />
            </div>
            <button>Edit</button>
          </div>
          <div>
            <div>
              <label htmlFor="username" className="block">
                Your Name
              </label>
              <input
                type="text"
                id="username"
                className="w-[800px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none"
                value={userInfo.username}
              />
            </div>
            <div>
              <label htmlFor="nickName" className="block">
                Your Nick Name
              </label>
              <input
                type="text"
                id="nickName"
                className="w-[800px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none"
                value={userInfo.nickName}
              />
            </div>
            <div>
              <label htmlFor="userSay" className="block">
                Aout you
              </label>
              <input
                type="text"
                id="userSay"
                className="w-[800px] border-2 rounded-lg p-4 mt-2 mb-10 outline-none"
                value={userInfo.userSay}
              />
            </div>
          </div>
        </div>
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

export default MyPageModify;
