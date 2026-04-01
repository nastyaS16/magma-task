import { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";

import "./table.css";

type Props = {};

const TableFull = (props: Props) => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch("/projects.json") // обращаемся к public как к корню
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  return (
    <table className="table">
      <tbody>
        {data.map((data) => (
          <TableRow
            key={data["$id"]}
            description={data.description}
            title={data.title}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableFull;
