import React from "react";
import styled from "styled-components";
import Donut from "./ChartFolder/Donut";
import Donut3 from "./ChartFolder/Donut3";
import Radar from "./ChartFolder/Radar";
import Bar from "./ChartFolder/Bar";
import Bar2 from "./ChartFolder/Bar2";
import Spline from "./ChartFolder/Spline";
import CoinTable from "./CoinTable";
import Map from "./ChartFolder/Map";

const Container = styled.div`
  padding: 0 20px;
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  color: white;
  grid-gap: 15px;
  > div:nth-child(5) {
    grid-row: 1/3;
    grid-column: 2/4;
  }
  > div:nth-child(7) {
    grid-row: 3;
    grid-column: 2/4;
  }
`;

function GridBox() {
  return (
    <Container>
      <div>
        <Donut />
      </div>
      <div style={{ position: "relative" }}>
        <Donut3 />
      </div>
      <div>
        <Radar />
      </div>
      <div>
        <Spline />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Bar />
      </div>
      <div>
        <CoinTable />
      </div>
      <div>
        <Bar2 />
      </div>
    </Container>
  );
}

export default GridBox;
