import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "./KanbanBoard";
import { TaskContainer, TrashIconBox, TrashIconBoxBtn } from "./TaskCard.style";

interface Props {
  task: Task;
  deleteTaskCard: (id: Id) => void;
}
const TaskCard = ({ task, deleteTaskCard }: Props) => {
  return (
    <TaskContainer key={task.id}>
      {task.title}
      <TrashIconBoxBtn onClick={() => deleteTaskCard(task.id)}>
        <TrashIconBox>
          <TrashIcon />
        </TrashIconBox>
      </TrashIconBoxBtn>
    </TaskContainer>
  );
};

export default TaskCard;
