import { createRef } from "react";
import "./App.css";
import Figurite from "./components/Figurite";
import Pdf from "react-to-pdf";
const ref = createRef();
function App() {
  return (
    <div className="App">
      <div ref={ref}>
        <h1>figurite</h1>
        <Figurite />
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
  );
}

export default App;
