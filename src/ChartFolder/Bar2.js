import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { socket2 } from "../App";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  > div {
    display: flex;
    align-items: center;
    width: 100%;
  }

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
        name: "Mining",
        data: [0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor: "white",
        offsetY: 20,
        toolbar: {
          show: false,
        },
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
        categories: ["Mining"],
      },
      yaxis: {
        min: 0,
        max: 200,
      },
    },
  });

  const [chartStyle2, setChartStyle2] = useState({
    series: [
      {
        name: "Ratio",
        data: [0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor: "white",
        offsetX: 5,
        toolbar: {
          show: false,
        },
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
          // barHeight: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Ratio"],
      },
      yaxis: {
        min: 0,
        max: 100,
      },
    },
  });

  useEffect(() => {
    socket2.on("PoolTRatio", (data) => {
      const json = JSON.parse(data);
      setChartStyle((options) => ({
        ...options,
        series: [
          {
            data: [json.mp],
          },
        ],
      }));

      setChartStyle2((options) => ({
        ...options,
        series: [
          {
            data: [Math.round((json.mp / (json.mp + json.p + json.g)) * 100)],
          },
        ],
      }));
    });

    // return () => socket.close();
  }, []);

  return (
    <Container>
      <span>MP Mining and Ratio</span>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="bar"
        width="550"
        height="100"
      />
      <Chart
        options={chartStyle2.options}
        series={chartStyle2.series}
        type="bar"
        width="550"
        height="100"
      />
    </Container>
  );
}

export default Bar2;
