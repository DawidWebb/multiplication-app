import React from "react";
import "./Data.css";
const Data = (props) => {
  return (
    <div className="container">
      <div className="data">
        <div className="firstNo">{props.numbers[0]}</div>
        <div className="multiplication">*</div>
        <div className="secondNo">{props.numbers[1]}</div>
        <div className="sumSign">=</div>
        <div className="sumOfMulti">
          <input
            onChange={props.change}
            placeholder="???"
            type="text"
            value={props.value}
          />
        </div>
      </div>
      <div className="buttons">
        <button className="btnDraw" onClick={props.draw}>
          Losuj
        </button>
        <button className="btnCheck" onClick={props.check}>
          Sprawdź
        </button>
      </div>
    </div>
  );
};
export default Data;
