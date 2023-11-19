import styled from "styled-components";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [kanbanTitle, setKanbanTitle] = useState<string>("first kanban");

  return (
    <>
      <Container>
        <Header kanbanTitle={kanbanTitle} />
        <Main kanbanTitle={kanbanTitle} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
  overflow-x: scroll;
`;
