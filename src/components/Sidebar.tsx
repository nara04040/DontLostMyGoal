import { SidebarContainer, SidebarHeader, SidebarKanbanList, SidebarKanbanListIconItem, SidebarKanbanListIconText, SidebarKanbanListWraaper } from "./Sidebar.style";

interface Props {
  kanbanTitle: string;
}

const Sidebar = ({ kanbanTitle }: Props) => {
  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록{/* Kanban list number */}</SidebarHeader>
      <SidebarKanbanListWraaper>
        {/* kanban list는 kanban상위 상태에서 mapping해서 활용 */}
        <SidebarKanbanList>
          {/*Kanban list 1 */}1<SidebarKanbanListIconItem>😁</SidebarKanbanListIconItem>
          <SidebarKanbanListIconText>{kanbanTitle}</SidebarKanbanListIconText>
        </SidebarKanbanList>
      </SidebarKanbanListWraaper>
    </SidebarContainer>
  );
};

export default Sidebar;
