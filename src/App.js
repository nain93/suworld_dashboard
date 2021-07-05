import GlobalStyles, { GlobalContainer } from "./GolbalStyles";
import Nav from "./Nav";
import GridBox from "./GridBox";
import styled from "styled-components";
import Header from "./Header";
import { useEffect } from "react";
import io from "socket.io-client";
import Particles from "react-particles-js";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  #tsparticles {
    position: fixed !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
  }
`;

const GifBox = styled.div`
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -999;
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

    socket.on("disconnect", function (reason) {
      console.log("disconnect", reason);
    });
    return () => socket.close();
  }, []);

  useEffect(() => {
    socket2.on("connect", (data) => {
      socket2.emit("dash-init", {});
    });

    socket2.on("disconnect", function (reason) {
      console.log("disconnect", reason);
    });

    socket2.on("reconnect", function (data) {
      socket2.emit("dash-init", {});
    });
    return () => socket2.close();
  }, []);
  return (
    <>
      <GlobalStyles />
      <GlobalContainer />
      <Container>
        <Nav />
        <Header />
        <GridBox />
        <GifBox>
          {/* <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              title="dd"
              src="https://giphy.com/embed/i4jKn7itdV2Tvjzj6Y"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </div> */}
        </GifBox>

        <Particles
          params={{
            particles: {
              number: {
                value: 355,
                density: {
                  enable: true,
                  value_area: 789.1476416322727,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.48927153781200905,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 83.91608391608392,
                  size: 1,
                  duration: 3,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Container>
    </>
  );
}

export default App;
