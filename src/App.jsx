import { useState } from "react";
import { searchProperty } from "./services/zillowcom";
import { SelectionBox } from "./components/SelectionBox";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SelectionBox />
    </>
  );
}

export default App;
