import TableCell from "../TableCell/TableCell";

import "./tablerow.css";

const TableRow = ({ description, title }) => {
  return (
    <tr className="row">
      <TableCell text={description} />
      <TableCell text={title} />
    </tr>
  );
};

export default TableRow;
