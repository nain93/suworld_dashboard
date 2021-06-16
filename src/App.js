import GlobalStyles from "./GolbalStyles";
import { GlobalContainer } from "./GolbalStyles";
import Nav from "./Nav";
import GridBox from "./GridBox";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
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
