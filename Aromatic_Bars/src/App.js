import "./App.css";
import Form from "./components/form";
import Thanks from "./components/Thanks";
import { Routes, Route } from "react-router-dom";
import Local from "./components/localStore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/local" element={<Local />} />
      </Routes>
    </div>
  );
}

export default App;
