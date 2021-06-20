import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
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
`;

function Radar() {
  const [chartStyle, setChartStyle] = useState({
    series: [
      {
        name: "Ratio",
        data: [281319148, 211112148, 251219148, 281319248, 261319148],
      },
    ],
    options: {
      chart: {
        type: "radar",
        offsetY: 10,
        foreColor: "white",
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radar: {
          size: 85,
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
        text: "0",
        align: "left",
        style: {
          color: "inherit",
        },
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
        categories: ["Tared", "Pio", "Erebos", "Neo", "TFIN"],
        position: "bottom",
      },
      yaxis: {
        show: false,
      },
    },
  });

  useEffect(() => {
    socket2.on("PoolNQRatio", (data) => {
      const json = JSON.parse(data);
      setChartStyle((options) => ({
        ...options,
        options: {
          xaxis: {
            categories: json.name,
          },
        },
        series: [
          {
            data: json.qty,
          },
        ],
      }));
    });
  }, []);

  return (
    <Container>
      <span>Name and Ratio</span>
      <Chart
        options={chartStyle.options}
        series={chartStyle.series}
        type="radar"
        height="220"
        width="550"
      />
    </Container>
  );
}

export default Radar;
