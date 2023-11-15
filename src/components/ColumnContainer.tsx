import React from "react";
import { Column } from "./KanbanBoard";

interface Props {
  col: Column;
}

const ColumnContainer = ({ col }: Props) => {
  console.log(col);
  return <div>ColumnContainer</div>;
};

export default ColumnContainer;
