import "./tablecell.css";

type Props = {
  text: string;
};

const TableCell = ({ text }: Props) => {
  return <td className="cell">{text}</td>;
};

export default TableCell;
