import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Clock from "react-live-clock";
import "moment-timezone";
import { socket } from "./App";

const Container = styled.div`
  width: 100%;
  height: 9%;
  padding: 0 20px;
`;

const TitleBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
  }
  div {
    word-spacing: 5px;
    letter-spacing: 2px;
    color: #4cdbff;
  }
`;

function Nav() {
  const [nodeCount, setNodeCount] = useState("");

  useEffect(() => {
    socket.on("node", (data) => {
      const json = JSON.parse(data);
      setNodeCount(json);
    });

    return () => socket.on("disconnect", function (reason) {});
  }, []);

  return (
    <Container>
      <TitleBox>
        <h1>SUWORLD</h1>
        <div>
          <Clock format={"YYYY-MM-DD HH:mm:ss"} ticking={true} />
        </div>
      </TitleBox>
    </Container>
  );
}

export default Nav;
