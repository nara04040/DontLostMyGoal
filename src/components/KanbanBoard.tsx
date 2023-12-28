import { IconBox, KanbanBoardAddColumnBtn, KanbanBoardBox, KanbanBoardContainer, KanbanBoardWrapper } from "./KanbanBoard.style";
import ColumnContainer from "./ColumnContainer";
import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { Column } from "../types";

const KanbanBoard = () => {
  const { kanban, currentKanban, generatedId, addColumn } = useStore();
  const currentKanbanData = kanban.find((kanban) => kanban.kanbanId === currentKanban);

  const createNewColumn = () => {
    const newColumn: Column = {
      id: generatedId(),
      title: `Column ${kanban.map((kanban) => (kanban.kanbanId === currentKanban ? kanban.columns.length : null)).join(" ")}`,
      task: [],
    };
    addColumn(newColumn);
  };
  // 전체 kanban에서의 각 column의 배열을 가져온다.
  // console.log(kanban.map((kanban) => kanban.columns));
  // 내가 원하는 값은 해당 column의 id와 일치하는 column의 배열의 길이다.
  console.log(kanban.find((kanban) => (kanban.kanbanId === currentKanban ? kanban.columns.length : null)));
  // console.log(kanban.find((kanban) => (kanban.kanbanId === currentKanban ? kanban.columns.length : null))?.columns.length);

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
