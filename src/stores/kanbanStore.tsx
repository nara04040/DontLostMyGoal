import { create } from "zustand";
import { Column, Id, Kanban, Task } from "../types";

interface KanbanState {
  columns: Column[];
  tasks: Task[];
  kanban: Kanban[];
  currentKanban: Id;
  generatedId: () => Id;
  addColumn: (column: Column) => void;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  addTask: (task: Task) => void;
  deleteTaskCard: (id: Id) => void;
  updateTaskCard: (id: Id, title: string) => void;
  updatecurrentKanban: (id: Id) => void;

  addKanban: (kanban: Kanban) => void;
  deleteKanban: (id: Id) => void;
  updateKanban: (id: Id, title: string) => void;
}

const useStore = create<KanbanState>((set) => ({
  columns: [],
  tasks: [],
  kanban: [
    { id: 1, title: "test" },
    { id: 2, title: "test2" },
  ],
  currentKanban: 0,

  generatedId: (): Id => {
    return Math.floor(Math.random() * 10001);
  },
  addColumn: (column: Column) => set((state) => ({ columns: [...state.columns, column] })),
  deleteColumn: (id: Id) => set((state) => ({ columns: state.columns.filter((col) => col.id !== id) })),
  updateColumn: (id: Id, title: string) => set((state) => ({ columns: state.columns.map((col) => (col.id === id ? { ...col, title } : col)) })),

  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTaskCard: (id: Id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTaskCard: (id: Id, title: string) => set((state) => ({ tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)) })),

  updatecurrentKanban: (id: Id) => set(() => ({ currentKanban: id })),
  addKanban: (kanban: Kanban) => set((state) => ({ kanban: [...state.kanban, kanban] })),
  deleteKanban: (id: Id) => set((state) => ({ kanban: state.kanban.filter((kanban) => kanban.id !== id) })),
  updateKanban: (id: Id, title: string) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.id === id ? { ...kanban, title } : kanban)) })),
}));

export default useStore;
