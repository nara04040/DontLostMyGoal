import { useState } from "react";
import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";
import { create } from "zustand";

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

interface KanbanState {
  columns: Column[];
  tasks: Task[];
  addColumn: (column: Column) => void;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  addTask: (task: Task) => void;
  deleteTaskCard: (id: Id) => void;
  updateTaskCard: (id: Id, title: string) => void;
}

const useStore = create<KanbanState>((set) => ({
  columns: [],
  tasks: [],
  addColumn: (column: Column) => set((state) => ({ columns: [...state.columns, column] })),
  deleteColumn: (id: Id) => set((state) => ({ columns: state.columns.filter((col) => col.id !== id) })),
  updateColumn: (id: Id, title: string) => set((state) => ({ columns: state.columns.map((col) => (col.id === id ? { ...col, title } : col)) })),
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTaskCard: (id: Id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTaskCard: (id: Id, title: string) => set((state) => ({ tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)) })),
}));

const KanbanBoard = () => {
  const { columns, tasks, addColumn, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();

  const createNewColumn = () => {
    const newColumn: Column = {
      id: generatedId(),
      title: `Column ${columns.length + 1}`,
    };
    addColumn(newColumn);
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
    addTask(AddTask);
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
