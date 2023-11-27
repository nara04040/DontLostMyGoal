import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { Column, Id, Task } from "../types";

const KanbanBoard = () => {
  const { kanban, generatedId, addColumn, deleteColumn, updateColumn, addTask, deleteTaskCard, updateTaskCard } = useStore();

  const createNewColumn = () => {
    const newColumn: Column = {
      id: generatedId(),
      title: `Column ${kanban.map((kanban) => kanban.columns.length + 1)}`,
      task: [],
    };
    addColumn(newColumn);
  };

  console.log(
    "kanban",
    kanban.map((kanban) => kanban.columns)
  );

  const createNewTask = (columnId: Id) => {
    const AddTask: Task = {
      id: generatedId(),
      columnId,
      title: `Task ${kanban.map((kanban) => kanban.columns.length + 1)}`,
      description: `Task ${kanban.map((kanban) => kanban.columns.length + 1)} description`,
    };
    addTask(AddTask);
  };

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>
          {kanban.map((kanbans) =>
            kanbans.columns.map((col) => (
              <ColumnContainer
                key={col.id}
                column={col}
                // tasks={tasks.filter((task) => task.columnId === col.id)}
                tasks={col.task.filter((task) => task.columnId === col.id)}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createNewTask={createNewTask}
                deleteTaskCard={deleteTaskCard}
                updateTaskCard={updateTaskCard}
              />
            ))
          )}
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
