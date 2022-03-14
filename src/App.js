import Nav from "./components/Nav";
import Inputs from "./components/Inputs";
import Display from "./components/Display";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Inputs />
      <Display />
    </div>
  );
}