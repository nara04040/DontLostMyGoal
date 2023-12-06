import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { Column } from "../types";

const KanbanBoard = () => {
  const { kanban, currentKanban, generatedId, addColumn } = useStore();

  const createNewColumn = () => {
    const newColumn: Column = {
      id: generatedId(),
      title: `Column ${kanban.map((kanban) => kanban.columns.length)} `,
      task: [],
    };
    addColumn(newColumn);
  };

  const currentKanbanData = kanban.find((kanban) => kanban.kanbanId === currentKanban);

  return (
    <KanbanBoardContainer>
      <KanbanBoardWrapper>
        <KanbanBoardBox>{currentKanbanData && currentKanbanData.columns.map((col) => <ColumnContainer key={col.id} columnId={col.id} />)}</KanbanBoardBox>
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
