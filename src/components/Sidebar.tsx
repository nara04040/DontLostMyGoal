import PencilIcon from "../icons/PencilIcon";
import useStore from "../stores/kanbanStore";
import { PencilIconBox, PencilIconBtn, SidebarContainer, SidebarHeader, SidebarKanbanList, SidebarKanbanListIconItem, SidebarKanbanListIconText, SidebarKanbanListWraaper } from "./Sidebar.style";

const Sidebar = () => {
  const { kanban, updatecurrentKanban } = useStore();

  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록</SidebarHeader>
      <SidebarKanbanListWraaper>
        {kanban.map((kanban) => (
          <SidebarKanbanList key={kanban.id} onClick={() => updatecurrentKanban(kanban.id)}>
            <SidebarKanbanListIconItem>😁</SidebarKanbanListIconItem>
            <SidebarKanbanListIconText>{kanban.title}</SidebarKanbanListIconText>
            <PencilIconBtn>
              <PencilIconBox>
                <PencilIcon />
              </PencilIconBox>
            </PencilIconBtn>
          </SidebarKanbanList>
        ))}
      </SidebarKanbanListWraaper>
    </SidebarContainer>
  );
};

export default Sidebar;
