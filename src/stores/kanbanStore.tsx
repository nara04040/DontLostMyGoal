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
}

const useStore = create<KanbanState>((set) => ({
  kanban: [{ kanbanId: 0, kanbanTitle: "My Kanban", columns: [] }],
  currentKanban: 0,

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
  // addTask: (task: Task) =>
  //   set((state) => ({
  //     kanban: state.kanban.map((kanban) =>
  //       kanban.kanbanId === state.currentKanban ? { ...kanban, columns: kanban.columns.map((col) => (col.id === task.id ? { ...col, tasks: [...col.task, task] } : col)) } : kanban
  //     ),
  //   })),

  addTask: (task: Task) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          // 여기서 새로운 columns 배열을 생성
          const newColumns = kanban.columns.map((col) => {
            // 여기서 console.log를 사용하여 각 column을 확인

            // 조건에 따라 새로운 task를 추가하거나 기존 column을 반환
            return col.id === task.id ? { ...col, tasks: [...col.task, task] } : col;
          });
          // 새로운 columns 배열을 포함한 kanban 객체 반환
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      }),
    })),

  deleteTaskCard: (id: Id) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) =>
        kanban.kanbanId === state.currentKanban ? { ...kanban, columns: kanban.columns.map((col) => (col.id === id ? { ...col, tasks: col.task.filter((task) => task.id !== id) } : col)) } : kanban
      ),
    })),
  updateTaskCard: (id: Id, title: string) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) =>
        kanban.kanbanId === state.currentKanban
          ? { ...kanban, columns: kanban.columns.map((col) => (col.id === id ? { ...col, tasks: col.task.map((task) => (task.id === id ? { ...task, title } : task)) } : col)) }
          : kanban
      ),
    })),

  // kanban
  updatecurrentKanban: (id: Id) => set(() => ({ currentKanban: id })),
  addKanban: (kanban: Kanban) => set((state) => ({ kanban: [...state.kanban, kanban] })),
  deleteKanban: (id: Id) => set((state) => ({ kanban: state.kanban.filter((kanban) => kanban.kanbanId !== id) })),
  updateKanban: (id: Id, title: string) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === id ? { ...kanban, title } : kanban)) })),
}));

export default useStore;
