import { Column, Id, Task } from "../types";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";
import useStore from "../stores/kanbanStore";

interface Props {
  column: Column;
  tasks: Task[];
  columnEditMode: boolean;
  setColumnEditMode: (editMode: boolean) => void;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createNewTask: (columnId: Id) => void;
  deleteTaskCard: (id: Id) => void;
  updateTaskCard: (id: Id, title: string) => void;
}

const ColumnContainer = () => {
  const { kanban, columnEditMode, setColumnEditMode, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();
  return (
    <ColumnCard>
      <ColumnTitle onClick={() => setColumnEditMode(true)}>
        {!columnEditMode && kanban.map((kanban) => kanban.kanbanTitle)}
        {columnEditMode && (
          <input
            type="text"
            autoFocus
            value={kanban.map((kanban) => kanban.kanbanTitle)}
            onChange={(e) => updateColumn(column.id, e.target.value)}
            onBlur={() => setColumnEditMode(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setColumnEditMode(false);
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
          <TaskCard key={task.id} task={task} deleteTaskCard={deleteTaskCard} updateTaskCard={updateTaskCard} />
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
