import React from "react";
import styled from "styled-components";

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

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const LogoImage = styled.img`
  height: 3rem;
  width: 3rem;
`;

const HeaderTitle = styled.h1`
  display: none;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    display: inline-block;
    font-size: 2.5rem;
  }
`;

const KanbanBoardNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BoardName = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: sans-serif;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-left: 5rem;
  }
`;
