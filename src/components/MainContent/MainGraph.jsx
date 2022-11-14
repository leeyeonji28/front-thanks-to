import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";
import { CgSpinner } from "react-icons/cg";
import { url } from "../../utile/url";
import { useRef } from "react";

const MainGraph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [countData, setCountData] = useState([]);
  const userId = useRecoilValue(loginState);
  const browserRef = useRef(0);
  const [graphBox, setGraphBox] = useState(null);

  const getUserInfo = async () => {
    try {
      const json = await axios({
        url: `${url}/api/user/${userId}`,
        method: "GET",
      });
      setUserInfo(json.data);
      setIsLoading(false);
      counter(json.data.postList);
    } catch (e) {
      setError(e);
    }
  };

  const boxWidth = () => {
    setGraphBox(browserRef.current.offsetWidth);
  };

  const counter = (userInfo) => {
    let graphData = [];
    let now = new Date();
    for (let i = 1; i <= 12; i++) {
      let count = 0;
      userInfo
        .filter((data) => data.postDate.includes(`${now.getFullYear()}-${i}-`))
        .map((data) => {
          return (count += 1);
        });
      graphData[i - 1] = count;
    }
    setCountData(graphData);
  };

  useEffect(() => {
    getUserInfo();
  });

  useEffect(() => {
    boxWidth();
  }, [browserRef]);

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    series: [
      {
        name: "series-1",
        data: countData,
        color: "#f43f5e",
      },
    ],
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
    <div className="app" ref={browserRef}>
      <h3 className="sm:text-base text-xl">
        <b className="sm:text-xl text-2xl">{userInfo.nickName}</b>
        님! 한 해의 감사지수를 그래프로 확인해 보세요 😊
      </h3>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={options.series}
            type="area"
            width={graphBox}
            height="236"
          />
        </div>
      </div>
    </div>
  );
};

export default MainGraph;
