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

export type Kanban = {
  kanbanId: Id;
  kanbanTitle: string;
  columns: Column[];
  tasks: Task[];
};
