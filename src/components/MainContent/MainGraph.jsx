import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/loginState";
import { CgSpinner } from "react-icons/cg";
import { url } from "../../utile/url";

const MainGraph = () => {
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
      setUserInfo(json.data.postList);
      setIsLoading(false);
      counter();
    } catch (e) {
      setError(e);
    }
  };

  const counter = () => {
    let countData = [];
    for (let i = 1; i <= 12; i++) {
      let count = 0;
      const result = userInfo
        .filter((data) => data.postDate.includes(`2022-${i}-`))
        .map((data) => {
          count += 1;
        });
      countData[i - 1] = count;
    }

    //    console.log("count : " + count);
    console.log(countData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
        data: [20, 10, 15, 28, 16, 23, 17, 28, 8, 0, 0, 0],
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
    <div className="app">
      <h3>
        <b className="text-xl">DingDong</b>
        님의 감사지수를 그래프로 확인해 보세요 😊 {userInfo.length}
      </h3>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={options.series}
            type="area"
            width="774"
            height="236"
          />
        </div>
      </div>
    </div>
  );
};

export default MainGraph;
