import { Column, Id, Task } from "./KanbanBoard";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";
import { useState } from "react";

interface Props {
  column: Column;
  tasks: Task[];
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createNewTask: (columnId: Id) => void;
}

const ColumnContainer = ({ column, tasks, deleteColumn, updateColumn, createNewTask }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <ColumnCard>
      <ColumnTitle onClick={() => setEditMode(true)}>
        {!editMode && column.title}
        {editMode && (
          <input
            type="text"
            autoFocus
            value={column.title}
            onChange={(e) => updateColumn(column.id, e.target.value)}
            onBlur={() => setEditMode(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditMode(false);
            }}
          />
        )}
        <TrashIconBoxBtn onClick={() => deleteColumn(column.id)}>
          <TrashIconBox>
            <TrashIcon />
          </TrashIconBox>
        </TrashIconBoxBtn>
      </ColumnTitle>
      <ColumnContent>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ColumnContent>
      <AddTaskBtn onClick={() => createNewTask(column.id)}>
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Task
      </AddTaskBtn>
    </ColumnCard>
  );
};

export default ColumnContainer;
