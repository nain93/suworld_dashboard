import React from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import { data } from "../data2";

const Container = styled.div`
  color: black;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
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

function Donut3() {
  return (
    <Container>
      <span>매니저풀 이름과 관심도</span>
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "blues" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#4274ff"
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", "2.2"]] }}
        legends={
          [
            //   {
            //     anchor: "bottom",
            //     direction: "row",
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 50,
            //     itemTextColor: "#999",
            //     itemDirection: "left-to-right",
            //     itemOpacity: 1,
            //     symbolSize: 10,
            //     symbolShape: "circle",
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemTextColor: "#000",
            //         },
            //       },
            //     ],
            //   },
          ]
        }
      />
    </Container>
  );
}

export default Donut3;
