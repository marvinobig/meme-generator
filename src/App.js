import { useState } from "react";
import Nav from "./components/Nav";
import Inputs from "./components/Inputs";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  return (
    <div className="App">
      <Nav />
      <main className="content">
        <Inputs
          setInput1={setInput1}
          setInput2={setInput2}
          input1={input1}
          input2={input2}
        />
        <Display input1={input1} input2={input2} />
      </main>
    </div>
  );
}
