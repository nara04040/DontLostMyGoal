import { Id, Task } from "../types";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";
import useStore from "../stores/kanbanStore";
import { useState } from "react";

interface ColumnContainerProps {
  columnId: Id;
}

const ColumnContainer = ({ columnId }: ColumnContainerProps) => {
  const { kanban, generatedId, deleteColumn, updateColumn, addTask } = useStore();
  const [editMode, setEditMode] = useState(false);
  const currentcolumnId = +kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.id).join(" ");

  const createNewTask = (curColumnId: Id) => {
    const newTaskId = generatedId();
    const newTask: Task = {
      id: newTaskId,
      columnId: curColumnId,
      title: `new Task`,
      description: `Task ${kanban.map((kanban) => kanban.columns.length)} description`,
    };
    addTask(newTask);
  };

  // console.log(kanban);
  // console.log(kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.title).join(" "));

  return (
    <ColumnCard>
      <ColumnTitle onClick={() => setEditMode(true)}>
        {!editMode && kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.title)}
        {editMode && (
          <input
            id={currentcolumnId.toString()}
            type="text"
            autoFocus
            value={kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.title).join(" ")}
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
      <ColumnContent>{kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.task.map((task) => <TaskCard key={task.id} task={task} />))}</ColumnContent>
      <AddTaskBtn onClick={() => createNewTask(currentcolumnId)}>
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Task
      </AddTaskBtn>
    </ColumnCard>
  );
};

export default ColumnContainer;
