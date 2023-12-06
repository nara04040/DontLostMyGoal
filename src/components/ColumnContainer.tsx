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
  const { kanban, currentKanban, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();
  const [editMode, setEditMode] = useState(false);
  const currentcolumnId = +kanban.map((kanban) => kanban.columns.find((col) => col.id === columnId)?.id).join(" ");

  const createNewTask = (curColumnId: Id) => {
    const newTask: Task = {
      id: curColumnId,
      title: `Task ${kanban.map((kanban) => kanban.columns.length)}`,
      description: `Task ${kanban.map((kanban) => kanban.columns.length)} description`,
    };
    addTask(newTask);
  };

  console.log(kanban.map((kanban) => kanban.columns.map((col) => col.task)));

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
      <ColumnContent>
        {/* {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTaskCard={deleteTaskCard} updateTaskCard={updateTaskCard} />
        ))} */}
      </ColumnContent>
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
