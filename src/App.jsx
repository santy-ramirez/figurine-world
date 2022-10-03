import { createRef } from "react";
import "./App.css";
import Figurite from "./components/Figurite";
import Pdf from "react-to-pdf";
const ref = createRef();
function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <div ref={ref}>
        <Figurite />
      </div>
    </div>
  );
}

export default App;
