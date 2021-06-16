import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  /* background-color: rgba(10, 19, 45, 0.5); */
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
  > span {
    color: white;
    position: absolute;
    width: 100%;
    text-align: center;
  }
`;

function Spline() {
  const [chartStyle, setChartStyle] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      //   {
      //     name: "series2",
      //     data: [11, 32, 45, 32, 34, 52, 41],
      //   },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        foreColor: "white",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <Container>
      <span>참여량 변화율</span>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="area"
        width="550"
        height="220"
      />
    </Container>
  );
}

export default Spline;
