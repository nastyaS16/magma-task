import React, { useState } from "react";
import TableCell from "../TableCell/TableCell";

import "./tableHeader.css";
import TableRow from "../TableRow/TableRow";

type Props = {};

function TableHeader({}: Props) {
  const [columnWidths, setColumnWidths] = useState({
    project: 200,
    title: 200,
  });

  const startResize = (e: React.MouseEvent, column: string) => {
    const startX = e.clientX;

    const startWidth = columnWidths[column as keyof typeof columnWidths];

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);

      setColumnWidths((prev) => ({
        ...prev,
        [column]: Math.max(newWidth, 100), // минимум 100px
      }));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <thead className="header">
      <tr>
        <th style={{ width: columnWidths.project }}>
          <>
            Проект
            <span
              className="resizer"
              onMouseDown={(e) => startResize(e, "project")}
            />
          </>
        </th>
        <th style={{ width: columnWidths.title }}>
          <>
            Название
            <span
              className="resizer"
              onMouseDown={(e) => startResize(e, "title")}
            />
          </>
        </th>
        <th>ГИП</th>
        <th>Тип ОКС</th>
        <th>Объект строительства</th>
        <th>Дата завершения</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
