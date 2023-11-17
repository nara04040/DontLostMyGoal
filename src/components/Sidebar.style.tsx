import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* background-color: ${({ theme }) => theme.background}; */
  background-color: #f4f5f7;
  position: fixed;
  left: 8px;
  width: 260px;
  height: 100vh;
  align-content: center;
  z-index: 50;
`;

export const SidebarHeader = styled.div`
  color: #4b5563;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 1rem 2rem;
`;

export const SidebarKanbanListWraaper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
`;
export const SidebarKanbanList = styled.div`
  background-color: white;
  display: flex;
  margin-right: 2rem;
  align-items: baseline;
  gap: 0.5rem;

  border-radius: 10px;
  padding: 1rem 1.2rem;
  cursor: pointer;
`;

export const SidebarKanbanListIconItem = styled.p`
  vertical-align: middle;
  height: 1rem;
`;
export const SidebarKanbanListIconText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
`;