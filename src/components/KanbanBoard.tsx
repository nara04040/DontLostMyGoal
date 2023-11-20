import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { Column, Id, Task } from "../types";

const KanbanBoard = () => {
  const { columns, tasks, addColumn, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();

  const createNewColumn = () => {
    const newColumn: Column = {
      id: generatedId(),
      title: `Column ${columns.length + 1}`,
    };
    addColumn(newColumn);
  };

  const generatedId = (): Id => {
    return Math.floor(Math.random() * 10001);
  };

  const createNewTask = (columnId: Id) => {
    const AddTask: Task = {
      id: generatedId(),
      columnId,
      title: `Task ${tasks.length + 1}`,
      description: `Task ${tasks.length + 1} description`,
    };
    addTask(AddTask);
  };

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>
          {columns.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              tasks={tasks.filter((task) => task.columnId === col.id)}
              deleteColumn={deleteColumn}
              updateColumn={updateColumn}
              createNewTask={createNewTask}
              deleteTaskCard={deleteTaskCard}
              updateTaskCard={updateTaskCard}
            />
          ))}
        </KanbanBoardBox>
        <KanbanBoardAddColumnBtn onClick={createNewColumn}>
          <IconBox>
            <PlusIcon />
          </IconBox>
          Add Column
        </KanbanBoardAddColumnBtn>
      </KanbanBoardWrapper>
    </KanbanBoardContainer>
  );
};

export default KanbanBoard;
