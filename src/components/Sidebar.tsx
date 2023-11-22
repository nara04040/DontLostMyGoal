import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
import useStore from "../stores/kanbanStore";
import {
  IconWrapper,
  PencilIconBox,
  PencilIconBtn,
  SidebarContainer,
  SidebarHeader,
  SidebarKanbanList,
  SidebarKanbanListIconText,
  SidebarKanbanListWraaper,
  TrashIconBox,
  TrashIconBtn,
} from "./Sidebar.style";

const Sidebar = () => {
  const { kanban, updatecurrentKanban, deleteKanban, setEditMode } = useStore();

  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록</SidebarHeader>
      <SidebarKanbanListWraaper>
        {kanban.map((kanban) => (
          <SidebarKanbanList key={kanban.kanbanId} onClick={() => updatecurrentKanban(kanban.kanbanId)}>
            <SidebarKanbanListIconText>{kanban.kanbanTitle}</SidebarKanbanListIconText>
            <IconWrapper>
              <PencilIconBtn onClick={() => setEditMode(true)}>
                <PencilIconBox>
                  <PencilIcon />
                </PencilIconBox>
              </PencilIconBtn>
              <TrashIconBtn onClick={() => deleteKanban(kanban.kanbanId)}>
                <TrashIconBox>
                  <TrashIcon />
                </TrashIconBox>
              </TrashIconBtn>
            </IconWrapper>
          </SidebarKanbanList>
        ))}
      </SidebarKanbanListWraaper>
    </SidebarContainer>
  );
};

export default Sidebar;
