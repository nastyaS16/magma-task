import { useState, useCallback } from "react";

export function useColumnResize(initialWidths: Record<string, number>) {
  const [columnWidths, setColumnWidths] = useState(initialWidths);

  const startResize = useCallback(
    (column: string, e: React.MouseEvent) => {
      const startX = e.clientX;
      const startWidth = columnWidths[column];

      const onMouseMove = (e: MouseEvent) => {
        const newWidth = startWidth + (e.clientX - startX);
        setColumnWidths((prev) => ({
          ...prev,
          [column]: Math.max(newWidth, 100),
        }));
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [columnWidths]
  );

  return { columnWidths, startResize };
}
