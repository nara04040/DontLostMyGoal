import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { TaskContainer, TrashIconBox, TrashIconBoxBtn } from "./TaskCard.style";

interface Props {
  task: Task;
  deleteTaskCard: (id: Id) => void;
  updateTaskCard: (id: Id, title: string) => void;
}
const TaskCard = ({ task, deleteTaskCard, updateTaskCard }: Props) => {
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
      <TrashIconBoxBtn onClick={() => deleteTaskCard(task.id)}>
        <TrashIconBox>
          <TrashIcon />
        </TrashIconBox>
      </TrashIconBoxBtn>
    </TaskContainer>
  );
};

export default TaskCard;
