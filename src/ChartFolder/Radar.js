import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  /* background-color: rgba(10, 19, 45, 0.5); */
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
`;

function Radar() {
  const [chartStyle, setChartStyle] = useState({
    series: [
      {
        name: "Series 1",
        data: [22, 35, 50],
      },
    ],

    options: {
      chart: {
        height: "100%",
        type: "radar",
        offsetY: 25,
      },

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radar: {
          size: 100,
          polygons: {
            strokeColors: "rgba(0, 81, 127, 0.5)",
            connectorColors: "rgba(0, 81, 127, 0.5)",
            fill: {
              colors: ["#00111B", "#00111B"],
            },
          },
        },
      },
      title: {
        text: "Radar with Polygon Fill",
        align: "center",
        offsetY: -25,
        // margin: 20,
      },
      colors: ["#4274ff"],
      markers: {
        size: 4,
        colors: ["#4274ff"],
        strokeColor: "#4274ff",
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: ["Monday", "Sunday", "Tuesday"],
        labels: {
          style: {
            colors: ["#5785f2", "#5785f2", "#5785f2"],
          },
        },
      },
    },
  });

  return (
    <Container>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="radar"
        height="220"
      />
    </Container>
  );
}

export default Radar;
