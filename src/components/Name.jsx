import React from "react";

export default function Name({ inputName, inputDate }) {
  return (
    <div className="item-c">
      <input value={inputName} className="input1" type="text" />
      <br />
      <input value={inputDate} type="date" className="input2" />
    </div>
  );
}
