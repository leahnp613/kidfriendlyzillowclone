import { useState } from "react";
import { searchProperty } from "./services/zillowcom";
import { SelectionBox } from "./components/SelectionBox";
import "./App.css";
import {SearchBox } from './components/SearchBox';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SelectionBox />
      <SearchBox />
    </>
  );
}

export default App;
