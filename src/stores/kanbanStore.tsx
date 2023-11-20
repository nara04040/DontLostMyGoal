import { create } from "zustand";
import { Column, Id, Task } from "../types";

interface KanbanState {
  columns: Column[];
  tasks: Task[];
  kanbanTitle: string;
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
  kanbanTitle: "first kanban",

  addColumn: (column: Column) => set((state) => ({ columns: [...state.columns, column] })),
  deleteColumn: (id: Id) => set((state) => ({ columns: state.columns.filter((col) => col.id !== id) })),
  updateColumn: (id: Id, title: string) => set((state) => ({ columns: state.columns.map((col) => (col.id === id ? { ...col, title } : col)) })),
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTaskCard: (id: Id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTaskCard: (id: Id, title: string) => set((state) => ({ tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)) })),
}));

export default useStore;
