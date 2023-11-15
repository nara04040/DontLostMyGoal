import { Column } from "./KanbanBoard";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import { AddTaskBtn, ColumnCard, ColumnContent, ColumnTitle, IconBox, TrashIconBox, TrashIconBoxBtn } from "./ColumnContainer.style";

interface Props {
  column: Column;
}

const ColumnContainer = ({ column }: Props) => {
  return (
    <ColumnCard>
      <ColumnTitle>
        {column.title}
        <TrashIconBoxBtn>
          <TrashIconBox>
            <TrashIcon />
          </TrashIconBox>
        </TrashIconBoxBtn>
      </ColumnTitle>
      <ColumnContent></ColumnContent>
      <AddTaskBtn>
        <IconBox>
          <PlusIcon />
        </IconBox>
        Add Task
      </AddTaskBtn>
    </ColumnCard>
  );
};

export default ColumnContainer;
