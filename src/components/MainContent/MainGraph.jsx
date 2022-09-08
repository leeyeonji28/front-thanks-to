import React, { Component } from "react";
import Chart from "react-apexcharts";

class MainGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      series: [
        {
          name: "series-1",
          data: [20, 10, 15, 28, 16, 23, 17, 28, 8],
          color: "#f43f5e",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <h3>
          <b className="text-xl">DingDong</b>
          님의 감사지수를 그래프로 확인해 보세요 😊
        </h3>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="774"
              height="236"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainGraph;
