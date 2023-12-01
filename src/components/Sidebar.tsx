import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
import useStore from "../stores/kanbanStore";
import { Id } from "../types";
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
  const { kanban, kanbanEditMode, deleteKanban, setKanbanEditMode, updatecurrentKanban, updateKanban } = useStore();
  const handleKanbanSelect = (kanbanId: Id) => {
    updatecurrentKanban(kanbanId);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>Kanban 목록</SidebarHeader>
      <SidebarKanbanListWraaper>
        {kanban.map((kanban) => (
          <SidebarKanbanList
            key={kanban.kanbanId}
            onClick={() => {
              handleKanbanSelect(kanban.kanbanId);
            }}
          >
            {!kanbanEditMode && <SidebarKanbanListIconText>{kanban.kanbanTitle}</SidebarKanbanListIconText>}
            {kanbanEditMode && (
              <input
                type="text"
                autoFocus
                value={kanban.kanbanTitle}
                onChange={(e) => updateKanban(kanban.kanbanId, e.target.value)}
                onBlur={() => setKanbanEditMode(false)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setKanbanEditMode(false);
                }}
              />
            )}
            <IconWrapper>
              <PencilIconBtn
                onClick={(e) => {
                  e.stopPropagation();
                  setKanbanEditMode(true);
                }}
              >
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
