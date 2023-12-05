import { Column, Id, Task } from "../types";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";
import useStore from "../stores/kanbanStore";
import { useState } from "react";

interface ColumnContainerProps {
  columId: Id;
}

const ColumnContainer = ({ columId }: ColumnContainerProps) => {
  const { kanban, columnEditMode, currentKanban, setColumnEditMode, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();
  const [editMode, setEditMode] = useState(false);
  const currentcolumnId = +kanban.map((kanban) => kanban.columns.find((col) => col.id === columId)?.id).join(" ");

  return (
    <ColumnCard>
      <ColumnTitle onClick={() => setEditMode(true)}>
        {!editMode && kanban.map((kanban) => kanban.columns.find((col) => col.id === columId)?.title)}
        {editMode && (
          <input
            id={currentcolumnId.toString()}
            type="text"
            autoFocus
            value={kanban.map((kanban) => kanban.columns.find((col) => col.id === columId)?.title).join(" ")}
            onChange={(e) => updateColumn(currentcolumnId, e.target.value)}
            onBlur={() => setEditMode(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditMode(false);
            }}
          />
        )}
        <TrashIconBoxBtn
          onClick={(e) => {
            e.stopPropagation(), deleteColumn(currentcolumnId);
          }}
        >
          <TrashIconBox>
            <TrashIcon />
          </TrashIconBox>
        </TrashIconBoxBtn>
      </ColumnTitle>
      <ColumnContent>
        {/* {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTaskCard={deleteTaskCard} updateTaskCard={updateTaskCard} />
        ))} */}
      </ColumnContent>
      <AddTaskBtn
      // onClick={() => createNewTask(column.id)}
      >
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Task
      </AddTaskBtn>
    </ColumnCard>
  );
};

export default ColumnContainer;
