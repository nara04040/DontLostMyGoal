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
  font-size: 1.2rem;
  @media (min-width: 800px) {
    display: inline-block;
    font-size: 2rem;
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

export const AddNewKanbanBtn = styled.button`
  display: flex;
  width: 150px;
  height: 60px;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: #cfd1d4;
  border: 2px solid var(--columnBackgroundColor);
  box-shadow: 0 0 0 0px #b93a46;
  font-weight: bold;
  margin-right: 3rem;

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    padding: 1.25rem;
    font-size: 0.8rem;
  }
`;

export const IconBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 768px) {
    height: 1rem;
  }
`;
