import { Task } from "./KanbanBoard";
import { TaskContainer } from "./TaskCard.style";

interface Props {
  task: Task;
}
const TaskCard = ({ task }: Props) => {
  return <TaskContainer key={task.id}>{task.title}</TaskContainer>;
};

export default TaskCard;
