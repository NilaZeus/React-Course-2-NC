import { useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState(true);
  return (
    <div className="App">
      <h1>Resturant is currently {status ? "Open" : "Closed"}</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Open" : "Closed"} Resturant
      </button>
    </div>
  );
}
