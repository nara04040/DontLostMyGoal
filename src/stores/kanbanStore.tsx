import { create } from "zustand";
import { Column, Id, Kanban, Task } from "../types";

interface KanbanState {
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
  kanbanEditMode: boolean;
  setKanbanEditMode: (editMode: boolean, kanbanId?: Id) => void;
}

const useStore = create<KanbanState>((set) => ({
  kanban: [{ kanbanId: 0, kanbanTitle: "My Kanban", columns: [], isEditing: false }],
  currentKanban: 0,
  editingKanbanId: null,
  kanbanEditMode: false,

  generatedId: (): Id => {
    return Math.floor(Math.random() * 10001);
  },

  // column
  addColumn: (column: Column) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === state.currentKanban ? { ...kanban, columns: [...kanban.columns, column] } : kanban)) })),
  deleteColumn: (id: Id) =>
    set((state) => {
      const newKanban = state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          const newColumns = kanban.columns.filter((col) => {
            return col.id !== Number(id);
          });
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      });

      return { kanban: newKanban };
    }),
  updateColumn: (id: Id, title: string) =>
    set((state) => {
      const newKanban = state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          const newColumns = kanban.columns.map((col) => {
            if (col.id === Number(id)) {
              return { ...col, title };
            }
            return col;
          });
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      });
      return { kanban: newKanban };
    }),

  // task
  addTask: (task: Task) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          const newColumns = kanban.columns.map((col) => {
            return col.id === task.columnId ? { ...col, task: [...col.task, task] } : col;
          });
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      }),
    })),
  deleteTaskCard: (taskId: Id) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          const newColumns = kanban.columns.map((col) => {
            const newTasks = col.task.filter((task) => task.id !== taskId);
            return { ...col, task: newTasks };
          });
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      }),
    })),
  updateTaskCard: (id: Id, title: string) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          const newColumns = kanban.columns.map((col) => {
            const newTasks = col.task.map((task) => {
              if (task.id === id) {
                return { ...task, title };
              }
              return task;
            });
            return { ...col, task: newTasks };
          });
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      }),
    })),

  // kanban
  updatecurrentKanban: (id: Id) => set(() => ({ currentKanban: id })),
  addKanban: (kanban: Kanban) => set((state) => ({ kanban: [...state.kanban, kanban] })),
  deleteKanban: (id: Id) => set((state) => ({ kanban: state.kanban.filter((kanban) => kanban.kanbanId !== id) })),
  updateKanban: (id: Id, title: string) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === id ? { ...kanban, kanbanTitle: title } : kanban)) })),
  setKanbanEditMode: (editMode: boolean, kanbanId?: Id) => set((state) => ({ kanban: state.kanban.map((k) => (k.kanbanId === kanbanId ? { ...k, isEditing: editMode } : k)) })),
}));

export default useStore;
