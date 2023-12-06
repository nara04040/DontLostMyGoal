import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Task } from "../types";
import { TaskContainer, TrashIconBox, TrashIconBoxBtn } from "./TaskCard.style";
import useStore from "../stores/kanbanStore";

interface Props {
  task: Task;
}
const TaskCard = ({ task }: Props) => {
  const { deleteTaskCard, updateTaskCard } = useStore();
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <TaskContainer key={task.id} onClick={() => setEditMode(true)}>
      {!editMode && task.title}
      {editMode && (
        <input
          type="text"
          autoFocus
          value={task.title}
          onChange={(e) => updateTaskCard(task.id, e.target.value)}
          onBlur={() => setEditMode(false)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setEditMode(false);
          }}
        />
      )}
      <TrashIconBoxBtn
        onClick={(e) => {
          e.stopPropagation(), deleteTaskCard(task.id);
        }}
      >
        <TrashIconBox>
          <TrashIcon />
        </TrashIconBox>
      </TrashIconBoxBtn>
    </TaskContainer>
  );
};

export default TaskCard;
