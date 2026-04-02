import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import TableFull from "./components/Table/TableFull/TableFull";
import Title from "./components/titles/Title";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const [errorText, setError] = useState<string | null>(null);

  const onButtonCick = () => {
    setError("Пока не реализовали...");
  };

  return (
    <>
      <div className="head">
        <Title level={1} title="Проекты" />
        <Button onClick={onButtonCick} />
      </div>
      <Wrapper>
        <TableFull setError={setError} />
      </Wrapper>
      {errorText && <ErrorMessage errorText={errorText} setError={setError} />}
    </>
  );
}

export default App;
