import "./App.css";
import TableFull from "./components/Table/TableFull/TableFull";
import Title from "./components/titles/Title";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Title level={1} title="Проекты" />
      <Wrapper>
        <TableFull />
      </Wrapper>
    </>
  );
}

export default App;
