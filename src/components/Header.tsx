import { BoardName, HeaderContainer, HeaderTitle, KanbanBoardNameContainer, LeftSide, LogoImage } from "./Header.style";

interface Props {
  kanbanTitle: string;
}

export const Header = ({ kanbanTitle }: Props) => {
  return (
    <HeaderContainer>
      <LeftSide>
        <LogoImage src="/logo.jpeg" />
        <HeaderTitle>Don't Lost Goal</HeaderTitle>
        <KanbanBoardNameContainer>
          <BoardName>{kanbanTitle}</BoardName>
        </KanbanBoardNameContainer>
      </LeftSide>
    </HeaderContainer>
  );
};
