import { useState } from "react";
import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";

export type Id = string | number;

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
  const deleteColumn = (id: Id) => {
    const filterColumns = columns.filter((col) => col.id !== id);
    setColumns(filterColumns);
  };
  const generatedId = (): Id => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>
          {columns.map((col) => (
            <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />
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
