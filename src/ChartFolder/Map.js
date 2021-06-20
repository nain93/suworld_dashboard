import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResponsiveChoropleth } from "@nivo/geo";
import { initData } from "../data";
import countries from "../world_countries.json";
import { socket2 } from "../App";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90% !important;
  }
  /* background-color: rgba(10, 19, 45, 0.5); */
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
  > span {
    color: white;
    height: 10%;
    width: 100%;
    text-align: center;
  }
`;

function Map() {
  const [dumData, setDumData] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(
      () =>
        setDumData((dumData) => [
          ...initData.map((item) => ({
            id: item.id,
            value: Math.floor(Math.random() * 300),
          })),
        ]),
      5000
    );

    return () => clearTimeout(timeOut);
  }, [dumData]);

  return (
    <Container>
      <span>Participating Countries</span>
      <ResponsiveChoropleth
        data={dumData}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[0, 300]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="inherit"
        borderWidth={0.5}
        borderColor="#4274ff"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
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

export default Map;
