import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const MainGraph = () => {
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

  return (
    <div className="app">
      <h3>
        <b className="text-xl">DingDong</b>
        님의 감사지수를 그래프로 확인해 보세요 😊
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
