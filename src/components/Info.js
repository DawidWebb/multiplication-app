import React from "react";

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
    return <div></div>;
  }
};

export default Info;
