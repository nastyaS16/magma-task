import { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";

import "./table.css";
import TableHeader from "../TableHeader/TableHeader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

type Props = {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

type ans = {
  sysId?: string;
  description: string;
  title: string;
  capitalConstructionType: {
    description: string;
  };
  projectType: {
    description: string;
  };
  finishDate: string;
  gip: {
    description: string;
  };
  $id: string;
};

const TableFull = ({ setError }: Props) => {
  const [data, setData] = useState([]);

  const formatDate = (finishDate: string) => {
    return new Date(finishDate).toDateString();
  };

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((res) => {
        const data = res.filter((item: ans) => item?.sysId === "PROJECT_DEF");
        setData(data);
      })
      .catch((err) => {
        setError("Ошибка загрузки данных");
      });
  }, []);
  return (
    <>
      <table className="table">
        <TableHeader />
        <tbody>
          {data.map((data: ans) => (
            <TableRow
              key={data["$id"]}
              description={data.description}
              title={data.title}
              contact={data?.gip?.description || ""}
              capitalConstructionType={
                data?.capitalConstructionType?.description || ""
              }
              typeBuilding={data?.projectType?.description || ""}
              finishDate={formatDate(data?.finishDate)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFull;
