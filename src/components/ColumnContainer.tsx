import { Column, Id, Task } from "../types";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";
import useStore from "../stores/kanbanStore";

interface ColumnContainerProps {
  columId: Id;
}

const ColumnContainer = ({ columId }: ColumnContainerProps) => {
  const { kanban, columnEditMode, currentKanban, setColumnEditMode, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();

  const currentcolumnId = kanban.find((kanban) => kanban.kanbanId === currentKanban)?.columns.find((col) => col.id === columId);
  console.log(currentcolumnId?.id);

  return (
    <ColumnCard>
      <ColumnTitle onClick={() => setColumnEditMode(true)}>
        {!columnEditMode && kanban.map((kanban) => kanban.kanbanTitle)}
        {columnEditMode && (
          <input
            type="text"
            autoFocus
            value={kanban.map((kanban) => kanban.kanbanTitle)}
            onChange={(e) => updateColumn(currentcolumnId?.id, e.target.value)}
            onBlur={() => setColumnEditMode(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setColumnEditMode(false);
            }}
          />
        )}
        <TrashIconBoxBtn
        //  onClick={() => deleteColumn(column.id)}
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
