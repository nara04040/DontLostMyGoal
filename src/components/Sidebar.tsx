import { SidebarContainer, SidebarHeader, SidebarKanbanList, SidebarKanbanListIconItem, SidebarKanbanListIconText, SidebarKanbanListWraaper } from "./Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록{/* Kanban list number */}</SidebarHeader>
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
