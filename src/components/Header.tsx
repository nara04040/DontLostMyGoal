import { BoardName, HeaderContainer, HeaderTitle, KanbanBoardNameContainer, LeftSide, LogoImage } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <LogoImage src="/logo.jpeg" />
        <HeaderTitle>Don't Lost Goal</HeaderTitle>
        <KanbanBoardNameContainer>
          <BoardName>`board.name이 들어옵니다.`</BoardName>
        </KanbanBoardNameContainer>
      </LeftSide>
    </HeaderContainer>
  );
};
