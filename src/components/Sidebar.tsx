import { useState } from "react";
import PencilIcon from "../icons/PencilIcon";
import ArrowIcon from "../icons/ArrowIcon";
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
  ToggleButton,
} from "./Sidebar.style";

const Sidebar = () => {
  const { kanban, setKanbanEditMode, deleteKanban, updatecurrentKanban, updateKanban } = useStore();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleKanbanSelect = (kanbanId: Id) => {
    updatecurrentKanban(kanbanId);
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>Kanban 목록</SidebarHeader>
      <ToggleButton onClick={toggleSidebar} isOpen={isOpen}>
        <ArrowIcon />
      </ToggleButton>
      <SidebarKanbanListWraaper>
        {kanban.map((kanban) => (
          <SidebarKanbanList
            key={kanban.kanbanId}
            onClick={() => {
              handleKanbanSelect(kanban.kanbanId);
            }}
          >
            {kanban.isEditing ? (
              <input
                type="text"
                autoFocus
                value={kanban.kanbanTitle}
                onChange={(e) => updateKanban(kanban.kanbanId, e.target.value)}
                onBlur={() => setKanbanEditMode(false, kanban.kanbanId)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setKanbanEditMode(false, kanban.kanbanId);
                }}
              />
            ) : (
              <SidebarKanbanListIconText>{kanban.kanbanTitle}</SidebarKanbanListIconText>
            )}
            <IconWrapper>
              <PencilIconBtn
                onClick={(e) => {
                  e.stopPropagation();
                  setKanbanEditMode(true, kanban.kanbanId);
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
