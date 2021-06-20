import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
// import { socket2 } from "../App";

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
        toolbar: {
          show: false,
        },
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
          "2021-06-05T01:00:00.000Z",
          "2021-06-05T01:30:00.000Z",
          "2021-06-05T02:30:00.000Z",
          "2021-06-05T03:30:00.000Z",
          "2021-06-05T04:30:00.000Z",
          "2021-06-05T05:30:00.000Z",
          "2021-06-05T06:30:00.000Z",
        ],
      },
      yaxis: {
        min: 0,
        max: 20000000000,
      },
      tooltip: {
        x: {
          format: "yy/MM/dd HH:mm",
        },
      },
    },
  });

  let time = 600;
  // eslint-disable-next-line no-unused-vars
  let hours = "";

  let x = setInterval(() => {
    hours = parseInt((time / 60) * 6);
    time--;
  }, 1000);

  useEffect(() => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const today = new Date(Date.now() - offset);
    let newDay = [];

    for (let i = 1; i < 7; i++) {
      const offset2 = new Date().getTimezoneOffset() * 60000 + 3600000 * i;
      const today2 = new Date(Date.now() - offset2);
      newDay.push(today2.toISOString());
    }
    newDay.reverse();
    newDay.push(today.toISOString());
    let timeArr = [
      10000000000, 12000200000, 14002010000, 11010000000, 10200000000,
      15000000000, 13000000000,
    ];

    if (time < 0) {
      clearInterval(x);
      timeArr.push(12240200000).slice(0, 1);
    }

    setChartStyle((options) => ({
      ...options,
      series: [
        {
          name: ["변화율"],
          data: timeArr,
        },
      ],
      options: {
        xaxis: {
          categories: newDay,
        },
      },
    }));
    // socket2.on("PoolTRatio", (data) => {
    //   const json = JSON.parse(data);

    // });
    // return () => socket2.close();
  }, []);

  return (
    <Container>
      <span>Rate of change</span>
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
