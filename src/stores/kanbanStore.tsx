import { create } from "zustand";
import { Column, Id, Kanban, Task } from "../types";

interface KanbanState {
  columns: Column[];
  tasks: Task[];
  kanban: Kanban[];
  editMode: boolean;
  currentKanban: Id;

  generatedId: () => Id;
  setEditMode: (editMode: boolean) => void;
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
  kanban: [{ kanbanId: 0, kanbanTitle: "My Kanban", columns: [], tasks: [] }],
  editMode: false,
  currentKanban: 0,

  generatedId: (): Id => {
    return Math.floor(Math.random() * 10001);
  },
  setEditMode: (editMode: boolean) => set(() => ({ editMode })),

  addColumn: (column: Column) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === state.currentKanban ? { ...kanban, columns: [...kanban.columns, column] } : kanban)) })),
  deleteColumn: (id: Id) => set((state) => ({ columns: state.columns.filter((col) => col.id !== id) })),
  updateColumn: (id: Id, title: string) => set((state) => ({ columns: state.columns.map((col) => (col.id === id ? { ...col, title } : col)) })),

  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTaskCard: (id: Id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTaskCard: (id: Id, title: string) => set((state) => ({ tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)) })),

  updatecurrentKanban: (id: Id) => set(() => ({ currentKanban: id })),
  addKanban: (kanban: Kanban) => set((state) => ({ kanban: [...state.kanban, kanban] })),
  deleteKanban: (id: Id) => set((state) => ({ kanban: state.kanban.filter((kanban) => kanban.kanbanId !== id) })),
  updateKanban: (id: Id, title: string) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === id ? { ...kanban, title } : kanban)) })),
}));

export default useStore;
