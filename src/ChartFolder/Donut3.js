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

function Donut3() {
  const [chartStyle, setChartStyle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = [
      "JAP",
      "KAi",
      "conder",
      "CHUNG",
      "NeoTar",
      "HYPER",
      // "Pio",
      // "Neo",
      // "FinalA",
      // "Erebos",
    ];
    socket2.on("PoolAtt", (data) => {
      const json = JSON.parse(data);
      let newArr = [];
      for (let i = 0; i < json.att.length; i++) {
        newArr.push({
          id: id[i],
          label: id[i],
          value: json.qty[i],
        });
      }
      // newArr = newArr.slice(0, 5);
      setChartStyle((chartStyle) => [...newArr.slice(0, 5)]);
      setLoading(false);
    });
    return () => socket2.close();
  }, []);

  return (
    <Container>
      <span>Name and Interest</span>
      <ResponsivePie
        data={loading ? data : chartStyle}
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
        arcLabelsSkipAngle={0}
        arcLinkLabelsStraightLength={0}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", "2.2"]] }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -50,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#fff",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  //   itemTextColor: "red",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Container>
  );
}

export default Donut3;
