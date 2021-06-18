import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { socket, socket2 } from "../App";

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
        bar: {
          borderRadius: 0,
        },
      },
    },
    series: [
      {
        name: "컨트랙션",
        data: [],
      },
    ],
  });

  useEffect(() => {
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
    socket2.on("trx30", (data) => {
      const json = JSON.parse(data);
      setBarOptions((options) => ({
        ...options,
        options: {
          xaxis: { categories: newDay },
        },
        series: [
          {
            data: json.summary
              .map((item) => Number(item.gen_block))
              .slice(0, 15),
          },
        ],
      }));
    });
    // setBarOptions((options) => ({
    //   ...options,
    //   options: {
    //     xaxis: { categories: newDay },
    //   },
    // }));
    return () => socket.on("disconnect", function (reason) {});
  }, []);

  // useEffect(() => {
  //   socket2.on("trx30", (data) => {
  //     const json = JSON.parse(data);
  //     setBarOptions((options) => ({
  //       ...options,
  //       series: [
  //         {
  //           data: json.summary
  //             .map((item) => Number(item.gen_block))
  //             .slice(0, 15),
  //         },
  //       ],
  //     }));
  //   });
  //   return () => socket.on("disconnect", function (reason) {});
  // }, []);

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
