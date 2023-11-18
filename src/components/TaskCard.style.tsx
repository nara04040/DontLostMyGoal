import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #f3f4f6;
  font-weight: bold;
  cursor: grab;
  &:hover {
    background-color: #e5e7eb;
  }
`;

export const TrashIconBoxBtn = styled.button`
  padding: 0.5rem 0.2rem;
  /* stroke: #6b7280; */
  stroke: #ee6e6e;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: inherit;
`;

export const TrashIconBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
`;
