import Sidebar from "./Sidebar";
import KanbanBoard from "./KanbanBoard";
import styled from "styled-components";
import useStore from "../stores/kanbanStore";

const Main = () => {
  const { kanban } = useStore();
  console.log(kanban);
  return (
    <MainContainer>
      <Sidebar />
      <KanbanBoard />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  margin-left: 260px; // sidebar width를 상수로 빼서 쓰는게 좋을듯
`;
