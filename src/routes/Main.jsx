import React from "react";
import MainCalendar from "../components/MainContent/MainCalendar";
import MainFollow from "../components/MainContent/MainFollow";
import MainGraph from "../components/MainContent/MainGraph";
import MainList from "../components/MainContent/MainList";
import MainProfile from "../components/MainContent/MainProfile";
import { HiChevronDoubleDown } from "react-icons/hi";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav";

const Main = () => {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1270px] h-[925px] m-auto">
      <Header />
      <div className="flex ">
        <SideNav />
        <div className="rounded-lg "></div>
        <div className="grid grid-cols-[830px_320px] gap-5 w-[1170px] h-[855px] ">
          <div className="grid grid-rows-[310px_525px] gap-5">
            <div className="bg-white rounded-lg p-7">
              <MainGraph />
            </div>
            <div className=" bg-white rounded-lg p-7 overflow-y-scroll scrollbar-hide">
              <MainList />
              <div className="absolute top-[860px] left-[530px] animate-bounce">
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
              <MainFollow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
