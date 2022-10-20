import React from "react";
import ImageEx from "./ImageEx";
import ImageIn from "./ImageIn";
import Height from "./Height";
import Bandera from "./Bandera";
import Name from "./Name";
import Coper from "./Croper";
import KupIcon from "./KupIcon";

function Figurite() {
  return (
    <div className="figu-conteiner">
      <Coper />
      <ImageEx>
        <KupIcon />
        <Height />
        <Bandera />
        <ImageIn />
        <Name />
      </ImageEx>
    </div>
  );
}

export default Figurite;
