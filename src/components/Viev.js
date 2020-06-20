/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "../styles/Viev.css";

const numbersCol = [
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
  { id: 7, name: 7 },
  { id: 8, name: 8 },
  { id: 9, name: 9 },
  { id: 10, name: 10 },
];
const numbersRow = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
  { id: 7, name: 7 },
  { id: 8, name: 8 },
  { id: 9, name: 9 },
  { id: 10, name: 10 },
];
const numbersTotal = [
  { id: 1, name: 2 },
  { id: 2, name: 6 },
  { id: 3, name: 8 },
  { id: 4, name: 10 },
  { id: 5, name: 12 },
  { id: 6, name: 14 },
  { id: 7, name: 16 },
  { id: 8, name: 18 },
  { id: 9, name: 20 },
  { id: 10, name: 6 },
  { id: 11, name: 9 },
  { id: 12, name: 12 },
  { id: 13, name: 15 },
  { id: 14, name: 18 },
  { id: 15, name: 21 },
  { id: 16, name: 24 },
  { id: 17, name: 27 },
  { id: 18, name: 30 },
  { id: 19, name: 8 },
  { id: 20, name: 12 },
  { id: 21, name: 16 },
  { id: 22, name: 20 },
  { id: 23, name: 24 },
  { id: 24, name: 28 },
  { id: 25, name: 32 },
  { id: 26, name: 36 },
  { id: 27, name: 40 },
  { id: 28, name: 10 },
  { id: 29, name: 15 },
  { id: 30, name: 20 },
  { id: 31, name: 25 },
  { id: 32, name: 30 },
  { id: 33, name: 35 },
  { id: 34, name: 40 },
  { id: 35, name: 45 },
  { id: 36, name: 50 },
  { id: 37, name: 12 },
  { id: 38, name: 18 },
  { id: 39, name: 24 },
  { id: 40, name: 30 },
  { id: 41, name: 36 },
  { id: 42, name: 42 },
  { id: 43, name: 48 },
  { id: 44, name: 54 },
  { id: 45, name: 60 },
  { id: 46, name: 14 },
  { id: 47, name: 21 },
  { id: 48, name: 28 },
  { id: 49, name: 35 },
  { id: 50, name: 42 },
  { id: 51, name: 49 },
  { id: 52, name: 56 },
  { id: 53, name: 63 },
  { id: 54, name: 70 },
  { id: 55, name: 16 },
  { id: 56, name: 24 },
  { id: 57, name: 32 },
  { id: 58, name: 40 },
  { id: 59, name: 48 },
  { id: 60, name: 56 },
  { id: 61, name: 64 },
  { id: 62, name: 72 },
  { id: 63, name: 80 },
  { id: 64, name: 18 },
  { id: 65, name: 27 },
  { id: 66, name: 36 },
  { id: 67, name: 45 },
  { id: 68, name: 54 },
  { id: 69, name: 63 },
  { id: 70, name: 72 },
  { id: 71, name: 81 },
  { id: 72, name: 90 },
  { id: 73, name: 20 },
  { id: 74, name: 30 },
  { id: 75, name: 40 },
  { id: 76, name: 50 },
  { id: 77, name: 60 },
  { id: 78, name: 70 },
  { id: 79, name: 80 },
  { id: 80, name: 90 },
  { id: 81, name: 100 },
];

class Viev extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <div className="StartViev">
        <div className="row">
          {numbersRow.map((number) => {
            return <div key={number.id}>{number.name}</div>;
          })}
        </div>
        <div className="column">
          {numbersCol.map((number) => {
            return <div key={number.id}>{number.name}</div>;
          })}
        </div>

        <div className="calculationViev">
          {numbersTotal.map((number) => {
            if (this.props.sum > 0) {
              if (number.name === this.props.sum) {
                return (
                  <div
                    key={number.id}
                    name={number.name}
                    style={{ backgroundColor: "red" }}
                  >
                    {this.props.sum}
                  </div>
                );
              } else {
                return <div key={number.id} name={number.name}></div>;
              }
            }
          })}
        </div>
      </div>
    );
  }
}
export default Viev;
