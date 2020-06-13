import React from "react";
import "./Data.css";
const Data = (props) => {
  return (
    <div className="container">
      <div className="data">
        <div className="firstNo">10</div>
        <div className="multiplication">*</div>
        <div className="secondNo">10</div>
        <div className="sumSign">=</div>
        <div className="sumOfMulti">100</div>
      </div>
      <div className="buttons">
        <button className="btnDraw">Losuj</button>
        <button className="btnCheck">Sprawdź</button>
      </div>
    </div>
  );
};
export default Data;
