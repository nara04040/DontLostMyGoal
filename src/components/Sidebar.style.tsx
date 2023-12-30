import styled from "styled-components";

type SidebarContainerProps = {
  isOpen: boolean;
};

export const SidebarContainer = styled.div<SidebarContainerProps>`
  /* background-color: ${({ theme }) => theme.background}; */
  background-color: #f4f5f7;
  position: absolute;
  left: ${(props) => (props.isOpen ? "8px" : "-252px")};
  width: 260px;
  height: 100vh;
  align-content: center;
  z-index: 50;
  border-right: 1px dotted #d1d5db;
`;

export const SidebarHeader = styled.div`
  display: flex;
  color: #4b5563;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem;
`;

export const SidebarKanbanListWraaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PencilIconBtn = styled.button`
  padding: 0.5rem 0.2rem;
  stroke: #6b7280;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: inherit;
  visibility: hidden;
`;

export const TrashIconBtn = styled.button`
  padding: 0.5rem 0.2rem;
  stroke: #6b7280;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: inherit;
  visibility: hidden;
`;

export const SidebarKanbanList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 20px;
  align-items: center;
  gap: 1.5rem;
  border-radius: 10px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  background-color: white;

  &:hover {
    ${PencilIconBtn} {
      visibility: visible;
    }
    ${TrashIconBtn} {
      visibility: visible;
    }
  }
`;

export const SidebarKanbanListIconText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
`;

export const PencilIconBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
`;

export const TrashIconBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: -8px;
  top: 40%;
  width: 10px;
  height: 10px;
`;
