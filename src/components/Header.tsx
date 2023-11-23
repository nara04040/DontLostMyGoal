import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { AddNewKanbanBtn, BoardName, HeaderContainer, HeaderTitle, IconBox, KanbanBoardNameContainer, LeftSide, LogoImage } from "./Header.style";

export const Header = () => {
  const { kanban, currentKanban } = useStore();
  const currentKanbanTitle = kanban.find((kanban) => kanban.kanbanId === currentKanban)?.kanbanTitle;
  return (
    <HeaderContainer>
      <LeftSide>
        <LogoImage src="/logo.jpeg" />
        <HeaderTitle>Don't Lost Goal</HeaderTitle>
        <KanbanBoardNameContainer>
          <BoardName>{currentKanbanTitle}</BoardName>
        </KanbanBoardNameContainer>
      </LeftSide>
      <AddNewKanbanBtn onClick={() => console.log("hi")}>
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Kanban
      </AddNewKanbanBtn>
    </HeaderContainer>
  );
};
