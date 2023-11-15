import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const LogoImage = styled.img`
  height: 3rem;
  width: 3rem;
`;

export const HeaderTitle = styled.h1`
  display: none;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    display: inline-block;
    font-size: 2.5rem;
  }
`;

export const KanbanBoardNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardName = styled.h2`
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
