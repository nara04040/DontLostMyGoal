import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
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
