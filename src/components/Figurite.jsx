import React from "react";
import ImageEx from "./ImageEx";
import ImageIn from "./ImageIn";
import Height from "./Height";
import Bandera from "./Bandera";
import Name from "./Name";

function Figurite() {
  return (
    <div>
      <h1>figurite</h1>
      <ImageIn></ImageIn>
      <ImageEx>
        <Height />
        <Bandera />
        <Name />
      </ImageEx>
    </div>
  );
}

export default Figurite;
