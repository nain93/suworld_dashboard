import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import styled from "styled-components";
import { socket } from "./App";

const Container = styled.div`
  width: 100%;
  height: 10%;
  padding: 0 20px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  div {
    word-spacing: 5px;
    letter-spacing: 2px;
    color: #4cdbff;
  }
`;

function Header() {
  const [nodeCount, setNodeCount] = useState("");

  useEffect(() => {
    socket.on("node", (data) => {
      const json = JSON.parse(data);
      setNodeCount(json);
    });
  }, []);

  return (
    <Container>
      <ImgBox>
        <div>
          <Clock format={"YYYY-MM-DD HH:mm:ss"} ticking={true} />
        </div>
        <span>Online Nodes: {nodeCount.node_count || 0}</span>
      </ImgBox>
    </Container>
  );
}

export default Header;
