import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {};
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="title">My Name : </div>
      <div>{renderCount.current} rendered once.</div>
    </div>
  );
}

export default App;
