import React, { useState } from "react";
import styled from "styled-components";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";

type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const createNewColumn = () => {
    const AddColumn: Column = {
      id: generatedId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, AddColumn]);
  };

  const generatedId = (): Id => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>
          {columns.map((col) => (
            <ColumnContainer key={col.id} column={col} />
          ))}
        </KanbanBoardBox>
        <KanbanBoardAddColumnBtn onClick={createNewColumn}>
          <IconBox>
            <PlusIcon />
          </IconBox>
          Add Column
        </KanbanBoardAddColumnBtn>
      </KanbanBoardWrapper>
    </KanbanBoardContainer>
  );
};

export default KanbanBoard;

const KanbanBoardContainer = styled.div`
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

const KanbanBoardWrapper = styled.div`
  display: flex;
  margin: auto;
  gap: 1rem;
`;

const KanbanBoardBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconBox = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;
const KanbanBoardAddColumnBtn = styled.button`
  display: flex;
  height: 60px;
  width: 150px;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  /* background-color: var(--mainBackgroundColor); */
  background-color: red;
  border: 2px solid var(--columnBackgroundColor);
  box-shadow: 0 0 0 0px #b93a46;
`;
