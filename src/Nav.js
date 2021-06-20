import React from "react";
import styled from "styled-components";

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
  font-family: "Orbitron", sans-serif;
  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

function Nav() {
  return (
    <Container>
      <TitleBox>
        <h1>HYPERCHAIN</h1>
      </TitleBox>
    </Container>
  );
}

export default Nav;
