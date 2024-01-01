import styled from "styled-components";

export const KanbanBoardContainer = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 0 40px;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #f4f5f7;
`;

export const KanbanBoardWrapper = styled.div`
  display: flex;
  margin: auto;
  gap: 1rem;
  overflow-x: scroll;
`;

export const KanbanBoardBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconBox = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;
export const KanbanBoardAddColumnBtn = styled.button`
  display: flex;
  height: 60px;
  width: 150px;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: #cfd1d4;
  border: 2px solid var(--columnBackgroundColor);
  box-shadow: 0 0 0 0px #b93a46;
  font-weight: bold;
`;
