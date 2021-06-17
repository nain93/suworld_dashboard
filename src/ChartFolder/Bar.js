import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { socket } from "../App";

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
      colors: ["#5785f2", "#0098bf", "#143fe8"],
      xaxis: {
        categories: "",
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
      // {
      //   name: "지갑 생성",
      //   data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      // },
      // {
      //   name: "FUN 생성",
      //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      // },
      {
        name: "컨트랙션",
        data: [2200200],
      },
    ],
  });

  useEffect(() => {
    // total_trx
    // timestamp

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
  }, []);

  useEffect(() => {
    socket.on("trx", (data) => {
      const json = JSON.parse(data);
      setBarOptions((options) => ({
        ...options,
        series: [{ data: [json.total_trx] }],
      }));
      // setBarOptions({
      //   series: [{ data: [json.total_trx] }],
      // });
    });
  }, []);

  return (
    <Container>
      {/* {console.log(jsonData)} */}
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
