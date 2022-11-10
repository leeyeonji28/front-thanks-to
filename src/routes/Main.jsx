import React from "react";
import MainCalendar from "../components/MainContent/MainCalendar";
import MainGraph from "../components/MainContent/MainGraph";
import MainList from "../components/MainContent/MainList";
import MainProfile from "../components/MainContent/MainProfile";
import { HiChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import { loginState } from "../recoil/loginState";
import Layout from "../components/Layout/Layout";
import MainLifeQuotes from "../components/LifeQuotes/MainLifeQuotes";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const access = useRecoilValue(loginState);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (access !== null) {
      setIsLogin(false);
    } else {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    }
  }, []);

  // media-query
  const mobile = useMediaQuery({
    query: "(max-width:639px)",
  });

  if (isLogin) {
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
      {mobile ? (
        <div>
          <div className="bg-white rounded-lg mb-5">
            <MainProfile />
          </div>
          <div className="bg-white rounded-lg mb-5">
            <MainCalendar />
          </div>
          <div className="bg-white rounded-lg mb-5">
            <MainLifeQuotes />
          </div>
          <div className="bg-white rounded-lg p-7 overflow-y-scroll scrollbar-hide">
            <MainList />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[830px_320px] gap-5 w-[1170px] h-[855px]">
          <div className="grid grid-rows-[310px_525px] gap-5">
            <div className="bg-white rounded-lg p-7">
              <MainGraph />
            </div>
            <div className=" bg-white rounded-lg p-7 overflow-y-scroll scrollbar-hide">
              <MainList />
              <div className="absolute top-[860px] left-[500px] animate-bounce">
                <HiChevronDoubleDown className="text-3xl text-gray-300" />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[240px_350px_225px] gap-5">
            <div className="bg-white rounded-lg">
              <MainProfile />
            </div>
            <div className="bg-white rounded-lg">
              <MainCalendar />
            </div>
            <div className="bg-white rounded-lg">
              <MainLifeQuotes />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Main;
