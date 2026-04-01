import "./title.css";

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
};

function Title({ level, title }: Props) {
  return <div className={`heading heading-${level}`}>{title}</div>;
}

export default Title;
