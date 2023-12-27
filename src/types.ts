export type Id = number;

export type Column = {
  id: Id;
  title: string;
  task: Task[];
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
  isEditing?: boolean;
};
