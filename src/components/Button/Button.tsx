import "./button.css";

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      Создать проект
    </button>
  );
};

export default Button;
