import styled from "styled-components";

export const ColumnCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border-radius: 0.5rem;
  background-color: #cfd1d4;
  /* @media (min-width: 768px) {
    width: 8rem;
  } */
`;
export const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  cursor: grab;
  padding: 0.7rem;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: #b5b5b5;
`;
export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.5rem;
  gap: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const AddTaskBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 1rem;
  background-color: inherit;
  font-weight: bold;
  &:hover {
    border-radius: 1rem;
    background-color: #010101;
    color: white;
  }
`;

export const TrashIconBoxBtn = styled.button`
  padding: 0.5rem 0.2rem;
  stroke: #6b7280;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: inherit;
`;

export const TrashIconBox = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
`;
export const IconBox = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
`;
