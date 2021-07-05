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
        toolbar: {
          show: false,
        },
      },
      colors: ["#5785f2", "#0098bf", "#143fe8"],
      yaxis: {
        // min: 0,
        // max: 90000,
      },
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

  const [test, setTest] = useState();

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
      setTest(json);
      setBarOptions((options) => ({
        ...options,
        options: {
          xaxis: { categories: newDay },
        },
        series: [
          {
            data: json.summary
              .map((item) => Number(item.gen_block))
              .slice(0, 15)
              .reverse(),
          },
        ],
      }));
    });
    return () => socket2.close();
  }, []);

  // useEffect(() => {
  //   console.log(barOptions.series[0].data ?? []);
  //   if (barOptions.series[0].data.length !== 0) {
  //     socket2.disconnect("trx30");
  //   }
  // }, [barOptions.series]);

  return (
    <Container>
      <span>15 days of data</span>
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
