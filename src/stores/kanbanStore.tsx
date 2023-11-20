import React from "react";
import { create } from "zustand";
import { Column } from "../components/KanbanBoard";

const useStore = create((set) => ({
  columns: [],
  addColumn: (column: Column) => set((state: Column) => ({ columns: [...state.columns, column] })),
}));
