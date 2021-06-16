import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  padding: 0 20px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0px -10px 30px -10px #00517f;
  border: 1px solid rgba(0, 81, 127, 0.5);
`;

function Header() {
  return (
    <Container>
      <ImgBox></ImgBox>
    </Container>
  );
}

export default Header;
