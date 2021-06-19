import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import { socket2 } from "../App";
import { data } from "../data2";

const Container = styled.div`
  color: black;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: relative;
  }
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
  > span {
    color: white;
    width: 100%;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
`;

// {
//   ...json.att.map((item) => ({
//     id: item,
//     labe: item,
//   })),
//   ...json.qty.map((item) => ({
//     value: item,
//   })),
// },

function Donut3() {
  const [chartStyle, setChartStyle] = useState([]);

  useEffect(() => {
    const id = [
      "JAP",
      "KAi",
      "conder",
      "CHUNG",
      "NeoTar",
      "HYPER",
      "Pio",
      "Neo",
      "FinalA",
      "Erebos",
    ];
    socket2.on("PoolAtt", (data) => {
      const json = JSON.parse(data);
      let newArr = [];
      for (let i = 0; i < json.att.length; i++) {
        newArr.push({
          id: id[i],
          label: json.att[i],
          value: json.qty[i],
        });
      }
      // newArr = newArr.slice(0, 5);
      setChartStyle(newArr);
    });
  }, []);

  return (
    <Container>
      <span>매니저풀 이름과 관심도</span>
      {console.log(chartStyle)}
      <ResponsivePie
        data={chartStyle === [] ? data : chartStyle}
        height={200}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "blues" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={40}
        arcLinkLabelsTextColor="#a0a0a0"
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLinkLabelsStraightLength={0}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", "2.2"]] }}
      />
    </Container>
  );
}

export default Donut3;
