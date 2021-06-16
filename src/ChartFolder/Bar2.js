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

function Bar2() {
  const [chartStyle, setChartStyle] = useState({
    series: [
      {
        data: [400, 430, 448],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor: "white",
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: "#0cd19c",
        width: 2,
        dashArray: 0,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom"],
        axisBorder: {},
      },
      yaxis: {},
    },
  });

  return (
    <Container>
      <span>MP의 채굴량 비율</span>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="bar"
        width="550"
        height="220"
      />
    </Container>
  );
}

export default Bar2;
