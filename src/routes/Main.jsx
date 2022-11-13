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
  const tablet = useMediaQuery({
    query: "(max-width:1023px)",
  });

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
      {mobile || tablet ? (
        <div>
          <div className="block sm:flex sm:justify-between">
            <div className="sm:w-[48%] bg-white rounded-lg mb-5">
              <MainProfile />
            </div>
            <div className="sm:w-[48%] bg-white rounded-lg mb-5">
              <MainCalendar />
            </div>
          </div>
          <div className="bg-white rounded-lg mb-5">
            <MainLifeQuotes />
          </div>
          <div className="hidden sm:block bg-white rounded-lg p-7 mb-5">
            <MainGraph />
          </div>
          <div className="bg-white rounded-lg p-7 overflow-y-scroll scrollbar-hide">
            <MainList />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[68%_30%] gap-5 2xl:w-[1180px] xl:w-[1080px] 2xl:h-[855px] h-[698px]">
          <div className="grid 2xl:grid-rows-[310px_525px] grid-rows-[310px_368px] gap-5">
            <div className="bg-white rounded-lg p-7">
              <MainGraph />
            </div>
            <div className=" bg-white rounded-lg p-7 overflow-y-scroll scrollbar-hide">
              <MainList />
            </div>
          </div>
          <div className="grid 2xl:grid-rows-[240px_350px_225px] grid-rows-[200px_300px_158px] gap-5">
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
