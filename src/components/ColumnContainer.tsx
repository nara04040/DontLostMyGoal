import { Column, Id, Task } from "./KanbanBoard";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  tasks: Task[];
  deleteColumn: (id: Id) => void;
  createNewTask: (columnId: Id) => void;
}

const ColumnContainer = ({ column, tasks, deleteColumn, createNewTask }: Props) => {
  return (
    <ColumnCard>
      <ColumnTitle>
        {column.title}
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
