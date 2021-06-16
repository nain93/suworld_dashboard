import React, { useEffect, useState } from "react";
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

  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
`;

function Bar() {
  const [barOptions, setBarOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
        foreColor: "white",
      },
      colors: ["#0098bf", "#5785f2", "#143fe8"],
      xaxis: {
        categories: ["0"],
        labels: {
          style: {
            colors: [
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
              "#5785f2",
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        // bar: {
        //   borderRadius: 4,
        // },
      },
    },
    series: [
      {
        name: "지갑 생성",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        style: {
          colors: ["#5785f2"],
        },
      },
      {
        name: "픽 생성",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "FUN 생성",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
  });

  useEffect(() => {
    const calday = async () => {
      let today = new Date();
      let initDay = new Date(today.setDate(today.getDate() - 14));
      let initMonth = initDay.getMonth() + 1;
      let initDayDate = initDay.getDate();
      let newDay = [`${initMonth}.${initDayDate}`];

      for (let i = 0; i < 14; i++) {
        let afterDay = new Date(today.setDate(today.getDate() + 1));
        let afterDayMonth = afterDay.getMonth() + 1;
        let afterDayDate = afterDay.getDate();
        newDay.push(`${afterDayMonth}.${afterDayDate}`);
      }
      setBarOptions((options) => ({
        ...options,
        options: {
          xaxis: { categories: newDay },
        },
      }));
    };
    calday();
  }, []);

  return (
    <Container>
      <span>15일간 데이터</span>
      <Chart
        options={barOptions.options}
        series={barOptions.series}
        type="bar"
        width="550"
        height="220"
      />
    </Container>
  );
}

export default Bar;
