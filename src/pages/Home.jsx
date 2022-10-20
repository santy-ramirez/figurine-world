import React from "react";
import Coper from "../components/Croper";
import Figurite from "../components/Figurite";
import Pdf from "react-to-pdf";
export default function Home() {
  return (
    <div>
      Home
      <div ref={ref}>
        <h1>figurite</h1>
        <Figurite />
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <Coper />
    </div>
  );
}
