import TableCell from "../TableCell/TableCell";

import "./tablerow.css";

type TableRowType = {
  description: string;
  title: string;
  contact: string;
  capitalConstructionType: string;
  typeBuilding: string;
  finishDate: string;
};

const TableRow = ({
  description,
  title,
  contact,
  capitalConstructionType,
  typeBuilding,
  finishDate,
}: TableRowType) => {
  return (
    <tr className="row">
      <TableCell text={description} />
      <TableCell text={title} />
      <TableCell text={contact} />
      <TableCell text={capitalConstructionType} />
      <TableCell text={typeBuilding} />
      <TableCell text={finishDate} />
    </tr>
  );
};

export default TableRow;
