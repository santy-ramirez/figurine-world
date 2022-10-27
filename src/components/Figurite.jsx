import React from "react";
import ImageEx from "./ImageEx";
import ImageIn from "./ImageIn";
import Height from "./Height";
import Bandera from "./Bandera";
import Name from "./Name";
import Coper from "./Croper";
import KupIcon from "./KupIcon";

function Figurite({ inputBandera, inputName, inputDate }) {
  return (
    <div className="figu-conteiner">
      <ImageEx>
        <KupIcon />
        <Height inputBandera={inputBandera} />
        <Bandera />

        <ImageIn />
        <Name inputDate={inputDate} inputName={inputName} />
      </ImageEx>
    </div>
  );
}

export default Figurite;
