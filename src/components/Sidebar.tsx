import PencilIcon from "../icons/PencilIcon";
import useStore from "../stores/kanbanStore";
import { PencilIconBox, PencilIconBtn, SidebarContainer, SidebarHeader, SidebarKanbanList, SidebarKanbanListIconItem, SidebarKanbanListIconText, SidebarKanbanListWraaper } from "./Sidebar.style";

const Sidebar = () => {
  const { kanbanTitle } = useStore();

  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록{/* Kanban list number */}</SidebarHeader>
      <SidebarKanbanListWraaper>
        {/* kanban list는 kanban상위 상태에서 mapping해서 활용 */}
        <SidebarKanbanList>
          {/*Kanban list 1 */}1<SidebarKanbanListIconItem>😁</SidebarKanbanListIconItem>
          <SidebarKanbanListIconText>{kanbanTitle}</SidebarKanbanListIconText>
          <PencilIconBtn>
            <PencilIconBox>
              <PencilIcon />
            </PencilIconBox>
          </PencilIconBtn>
        </SidebarKanbanList>
      </SidebarKanbanListWraaper>
    </SidebarContainer>
  );
};

export default Sidebar;
