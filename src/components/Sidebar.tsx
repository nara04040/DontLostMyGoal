import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>All Kanban List{/* Kanban list number */}</SidebarHeader>
      <SidebarKanbanListWraaper>
        {/* kanban list는 kanban상위 상태에서 mapping해서 활용 */}
        <SidebarKanbanList>
          {/*Kanban list 1 */}1<SidebarKanbanListIconItem>😁</SidebarKanbanListIconItem>
          <SidebarKanbanListIconText>Kanban List first</SidebarKanbanListIconText>
        </SidebarKanbanList>
      </SidebarKanbanListWraaper>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  /* background-color: ${({ theme }) => theme.background}; */
  background-color: #f4f5f7;
  position: fixed;
  left: 8px;
  width: 260px;
  height: 100vh;
  align-content: center;
  z-index: 50;
`;

const SidebarHeader = styled.div`
  color: #4b5563;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 1rem 2rem;
`;

const SidebarKanbanListWraaper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
`;
const SidebarKanbanList = styled.div`
  background-color: white;
  display: flex;
  margin-right: 2rem;
  align-items: baseline;
  gap: 0.5rem;

  border-radius: 10px;
  padding: 1rem 1.2rem;
  cursor: pointer;
`;

const SidebarKanbanListIconItem = styled.p`
  vertical-align: middle;
  height: 1rem;
`;
const SidebarKanbanListIconText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
`;
