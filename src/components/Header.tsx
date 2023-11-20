import PlusIcon from "../icons/PlusIcon";
import useStore from "../stores/kanbanStore";
import { AddNewKanbanBtn, BoardName, HeaderContainer, HeaderTitle, IconBox, KanbanBoardNameContainer, LeftSide, LogoImage } from "./Header.style";

export const Header = () => {
  const { kanban } = useStore();
  const currentKanbanTitle = kanban.find((kanban) => kanban.id === 1);

  return (
    <HeaderContainer>
      <LeftSide>
        <LogoImage src="/logo.jpeg" />
        <HeaderTitle>Don't Lost Goal</HeaderTitle>
        <KanbanBoardNameContainer>
          <BoardName>{currentKanbanTitle?.title}</BoardName>
        </KanbanBoardNameContainer>
      </LeftSide>
      <AddNewKanbanBtn>
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Kanban
      </AddNewKanbanBtn>
    </HeaderContainer>
  );
};
