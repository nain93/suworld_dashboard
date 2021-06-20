import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { socket2 } from "../App";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  > span {
    position: absolute;
    width: 100%;
    text-align: center;
  }
`;

function DonutChart() {
  const [chartStyle1, setChartStyle1] = useState({
    optionsRadial: {
      series: [0],
      colors: ["#4274ff"],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: "35",
          },
          track: {
            background: "#00486C",
            startAngle: -135,
            endAngle: 135,
            opacity: 0.5,
          },

          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "15px",
              show: true,
              fontWeight: 600,
              color: "#355AC4",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#003A60"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "butt",
      },
      labels: ["MP"],
    },
    seriesRadial: [0],
  });

  const [chartStyle2, setChartStyle2] = useState({
    optionsRadial: {
      series: [0],
      colors: ["#4274ff"],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: "35",
          },
          track: {
            background: "#00486C",
            startAngle: -135,
            endAngle: 135,
            opacity: 0.5,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "15px",
              show: true,
              fontWeight: 600,
              color: "#4274ff",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#003A60"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "butt",
      },
      labels: ["P"],
    },
    seriesRadial: [0],
  });

  const [chartStyle3, setChartStyle3] = useState({
    optionsRadial: {
      series: [0],
      colors: ["#4274ff"],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: "35",
          },
          track: {
            background: "#00486C",
            startAngle: -135,
            endAngle: 135,
            opacity: 0.5,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "15px",
              show: true,
              fontWeight: 600,
              color: "#4274ff",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#003A60"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "butt",
      },
      labels: ["G"],
    },
    seriesRadial: [0],
  });

  useEffect(() => {
    socket2.on("PoolTRatio", (data) => {
      const json = JSON.parse(data);
      setChartStyle1((chartStyle1) => ({
        ...chartStyle1,
        seriesRadial: [
          Math.round((json.mp / (json.mp + json.p + json.g)) * 100),
        ],
      }));
      setChartStyle2((chartStyle2) => ({
        ...chartStyle2,
        seriesRadial: [
          Math.round((json.p / (json.mp + json.p + json.g)) * 100),
        ],
      }));
      setChartStyle3((chartStyle3) => ({
        ...chartStyle3,
        seriesRadial: [
          Math.round((json.g / (json.mp + json.p + json.g)) * 100),
        ],
      }));
    });
  }, []);

  return (
    <Container>
      <span>MP, P, G Ratio</span>
      <Chart
        options={chartStyle1.optionsRadial}
        series={chartStyle1.seriesRadial}
        type="radialBar"
        height="220"
      />
      <Chart
        options={chartStyle2.optionsRadial}
        series={chartStyle2.seriesRadial}
        type="radialBar"
        height="220"
      />
      <Chart
        options={chartStyle3.optionsRadial}
        series={chartStyle3.seriesRadial}
        type="radialBar"
        height="220"
      />
    </Container>
  );
}

export default DonutChart;
