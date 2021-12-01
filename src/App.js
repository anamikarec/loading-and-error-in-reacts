import "./styles.css";
import { useEffect } from "react";
export default function App() {
  console.log(1);
  useEffect(() => {
    console.log("useffect");
  });
  console.log(2);
  return (
    <div className="App">
      <h1>Loading and Error Concept</h1>
    </div>
  );
}
