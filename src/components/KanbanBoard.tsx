import { useState } from "react";
import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  title: string;
  description: string;
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

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
  const updateColumn = (id: Id, title: string) => {
    const newColumnsTitle = columns.map((col) => {
      if (col.id === id) {
        return { ...col, title };
      }
      return col;
    });
    setColumns(newColumnsTitle);
  };
  const generatedId = (): Id => {
    return Math.floor(Math.random() * 10001);
  };

  const createNewTask = (columnId: Id) => {
    const AddTask: Task = {
      id: generatedId(),
      columnId,
      title: `Task ${tasks.length + 1}`,
      description: `Task ${tasks.length + 1} description`,
    };
    setTasks([...tasks, AddTask]);
  };
  const deleteTaskCard = (id: Id) => {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks(filterTasks);
  };
  const updateTaskCard = (id: Id, title: string) => {
    const newTasksTitle = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      }
      return task;
    });
    setTasks(newTasksTitle);
  };

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>
          {columns.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              tasks={tasks.filter((task) => task.columnId === col.id)}
              deleteColumn={deleteColumn}
              updateColumn={updateColumn}
              createNewTask={createNewTask}
              deleteTaskCard={deleteTaskCard}
              updateTaskCard={updateTaskCard}
            />
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
