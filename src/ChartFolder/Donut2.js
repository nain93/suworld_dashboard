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

function Donut2() {
  const [chartStyle, setChartStyle] = useState({
    series: [44, 55, 120],
    options: {
      chart: {
        type: "donut",
        foreColor: "white",
      },
      dataLabels: {
        enabled: true,
        style: {
          //   colors: ["#143fe8"],
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "55%",
            offsetY: 20,
          },
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: "inherit",
        width: 2,
        dashArray: 0,
      },
      fill: {
        type: "gradient",
      },
      colors: ["#0098bf", "#5785f2", "#143fe8"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 20,
      },
    },
  });
  return (
    <Container>
      <span>매니저풀 이름과 관심도</span>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="donut"
        width="550"
        height="200"
      />
    </Container>
  );
}

export default Donut2;
