import React from "react";
import "../styles/Info.css";
const Info = (props) => {
  if (props.sumOfMulti > 0) {
    return (
      <div className="infoWin">
        Brawo wynik to {props.sumOfMulti}, zobacz w tabeli co można jeszcze
        pomnożyć żeby wynik był równy {props.sumOfMulti}
      </div>
    );
  } else if (props.sumOfMulti === 0) {
    return <div className="infoLost">Niestety wynik nie poprawny ):</div>;
  } else {
    return <div className="infoStart"></div>;
  }
};

export default Info;
