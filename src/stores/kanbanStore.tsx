import { create } from "zustand";
import { Column, Id, Kanban, Task } from "../types";

interface KanbanState {
  kanban: Kanban[];
  kanbanEditMode: boolean;
  columnEditMode: boolean;
  taskEditMode: boolean;
  currentKanban: Id;

  generatedId: () => Id;
  setKanbanEditMode: (editMode: boolean) => void;
  setColumnEditMode: (editMode: boolean) => void;
  setTaskEditMode: (editMode: boolean) => void;

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
  kanbanEditMode: false,
  columnEditMode: false,
  taskEditMode: false,
  currentKanban: 0,

  generatedId: (): Id => {
    return Math.floor(Math.random() * 10001);
  },
  setKanbanEditMode: (editMode: boolean) => set(() => ({ kanbanEditMode: editMode })),
  setColumnEditMode: (editMode: boolean) => set(() => ({ columnEditMode: editMode })),
  setTaskEditMode: (editMode: boolean) => set(() => ({ taskEditMode: editMode })),

  // column
  addColumn: (column: Column) => set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === state.currentKanban ? { ...kanban, columns: [...kanban.columns, column] } : kanban)) })),
  deleteColumn: (id: Id) =>
    set((state) => ({ kanban: state.kanban.map((kanban) => (kanban.kanbanId === state.currentKanban ? { ...kanban, columns: kanban.columns.filter((col) => col.id !== id) } : kanban)) })),
  // updateColumn: (id: Id, title: string) =>
  //   set((state) => ({
  //     kanban: state.kanban.map((kanban) =>
  //       kanban.kanbanId === state.currentKanban ? { ...kanban, columns: kanban.columns.map((col) => (console.log(col.id, id), col.id === id ? { ...col, title } : col)) } : kanban
  //     ),
  //   })),

  updateColumn: (id: Id, title: string) =>
    set((state) => {
      console.log("updateColumn called with id:", id, "and title:", title);

      // 새로운 kanban 배열 생성
      const newKanban = state.kanban.map((kanban) => {
        if (kanban.kanbanId === state.currentKanban) {
          console.log("Matching kanban found:", kanban);

          // columns 업데이트
          // console.log(
          //   "colid와 id가 같나용?",
          //   kanban.columns.map((col) => {
          //     col.id === id;
          //   })
          // );
          console.log("kanaban에서의 column id 값", kanban.columns.map((col) => col.id).join(" "));
          const columnId = kanban.columns.map((col) => col.id).join(" ");
          console.log("id 값", id);
          const newColumns = kanban.columns.map((col) => {
            if (columnId === id) {
              console.log("Matching column found:", col);
              return { ...col, title };
            }
            return col;
          });

          console.log("Updated columns:", newColumns);
          return { ...kanban, columns: newColumns };
        }
        return kanban;
      });

      console.log("New kanban state:", newKanban);
      return { kanban: newKanban };
    }),

  // task
  addTask: (task: Task) =>
    set((state) => ({
      kanban: state.kanban.map((kanban) =>
        kanban.kanbanId === state.currentKanban ? { ...kanban, columns: kanban.columns.map((col) => (col.id === task.columnId ? { ...col, tasks: [...col.task, task] } : col)) } : kanban
      ),
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
