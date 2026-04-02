import { useColumnResize } from "../../../hooks/useColumnResize";

import "./tableHeader.css";

type Props = {};

function TableHeader({}: Props) {
  const { columnWidths, startResize } = useColumnResize({
    project: 200,
    title: 200,
    GIP: 200,
    OKC: 200,
    object: 200,
    date: 200,
  });

  const renderResizableTh = (label: string, key: string) => (
    <th style={{ width: columnWidths[key] }}>
      {label}
      <span className="resizer" onMouseDown={(e) => startResize(key, e)} />
    </th>
  );

  return (
    <thead className="header">
      <tr>
        {renderResizableTh("Проект", "project")}
        {renderResizableTh("Название", "title")}
        {renderResizableTh("ГИП", "GIP")}
        {renderResizableTh("Тип ОКС", "OKC")}
        {renderResizableTh("Объект строительства", "object")}
        {renderResizableTh("Дата завершения", "date")}
      </tr>
    </thead>
  );
}

export default TableHeader;
