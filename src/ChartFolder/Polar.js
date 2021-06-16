import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import HighchartsMore from "highcharts/highcharts-more";

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
`;

function Polar() {
  HighchartsMore(Highcharts);
  const options = {
    chart: {
      polar: true,
      backgroundColor: "rgba(0,10,9,0.1)",
      height: (9 / 16) * 100 + "%",
    },

    // title: {
    //   text: "Highcharts Polar Chart",
    // },

    // subtitle: {
    //   text: "Also known as Radar Chart",
    // },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          backgroundColor: "rgba(0,10,9,0.1)",
          borderColor: "rgba(0,10,9,0.1)",
        },
      ],
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: {
        format: "{value}°",
      },
      lineColor: "#4274ff",
    },

    yAxis: {
      min: 0,
      gridLineColor: "#4274ff",
    },

    zAxis: {
      gridLineColor: "#4274ff",
    },

    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45,
      },
      column: {
        pointPadding: 0,
        groupPadding: 0,
      },
    },
    colors: ["#4274ff"],
    series: [
      // {
      //   type: "column",
      //   name: "Column",
      //   data: [8, 7, 6, 5, 4, 3, 2, 1],
      //   pointPlacement: "between",
      // },
      // {
      //   type: "line",
      //   name: "Line",
      //   data: [1, 2, 3, 4, 5, 6, 7, 8],
      // },
      {
        type: "area",
        name: "Area",
        data: [1, 8, 2, 7, 3, 6, 4, 5],
        fillColor: undefined,
        fillOpacity: 1,
      },
    ],
  };

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
}

export default Polar;
