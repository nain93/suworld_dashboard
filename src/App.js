import GlobalStyles from "./GolbalStyles";
import { GlobalContainer } from "./GolbalStyles";
import Nav from "./Nav";
import GridBox from "./GridBox";
import styled from "styled-components";
import Header from "./Header";
import io from "socket.io-client";
import { useEffect } from "react";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const socket = io("https://sws.suworld.net", {
  transports: ["websocket"],
  forceNew: true,
  reconnectionAttempts: 1000,
});

export const socket2 = io("https://sdash.suworld.net", {
  transports: ["websocket"],
  forceNew: true,
  reconnectionAttempts: 1000,
});

function App() {
  useEffect(() => {
    socket.on("connect", (data) => {
      socket.emit("main-init", {});
    });

    socket.on("reconnect", (data) => {
      socket.emit("main-init", {});
    });
  }, []);

  useEffect(() => {
    socket2.on("connect", function (data) {
      socket2.emit("dash-init", {});
    });

    socket2.on("reconnect", function (data) {
      socket2.emit("dash-init", {});
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <GlobalContainer />
      <Container>
        <Nav />
        <Header />
        <GridBox />
      </Container>
    </>
  );
}

export default App;
