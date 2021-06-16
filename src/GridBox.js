import React from "react";
import styled from "styled-components";
import DonutChart from "./ChartFolder/DonutChart";
import Radar from "./ChartFolder/Radar";
import Polar from "./ChartFolder/Polar";

const Container = styled.div`
  padding: 20px;
  display: grid;
  width: 100%;
  height: 90%;
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
        <DonutChart />
      </div>
      <div>2</div>
      <div>
        {/* <Radar /> */}
        <Radar />
      </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </Container>
  );
}

export default GridBox;
