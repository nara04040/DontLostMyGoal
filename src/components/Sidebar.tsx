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
  const { kanban, updatecurrentKanban } = useStore();

  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록</SidebarHeader>
      <SidebarKanbanListWraaper>
        {kanban.map((kanban) => (
          <SidebarKanbanList key={kanban.id} onClick={() => updatecurrentKanban(kanban.id)}>
            <SidebarKanbanListIconText>{kanban.title}</SidebarKanbanListIconText>
            <IconWrapper>
              <PencilIconBtn>
                <PencilIconBox>
                  <PencilIcon />
                </PencilIconBox>
              </PencilIconBtn>
              <TrashIconBtn>
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
