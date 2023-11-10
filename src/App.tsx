import styled from "styled-components";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
  overflow-x: scroll;
`;
