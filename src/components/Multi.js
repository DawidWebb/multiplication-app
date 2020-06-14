import React, { Component } from "react";

import "./Multi.css";
import Data from "./Data";
class Multi extends Component {
  state = {
    value: "",
    numbers: [],
  };
  handleDraw = () => {
    let numbers = [...this.state.numbers];
    numbers = [];
    let drawNumber1 = Math.floor(Math.random() * 10 + 1);
    let drawNumber2 = Math.floor(Math.random() * 10 + 1);
    numbers.push(drawNumber1, drawNumber2);
    this.setState({
      numbers,
      value: "",
    });
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };
  handleCheck = () => {
    let sumOfMulti = this.state.numbers[0] * this.state.numbers[1];
    if (this.state.value * 1 === sumOfMulti) {
      this.props.changeValue(sumOfMulti);
    } else {
      return console.log("LOSE");
    }
  };
  render() {
    return (
      <div className="Multi">
        <Data
          value={this.state.value}
          numbers={this.state.numbers}
          draw={this.handleDraw}
          change={this.handleChange}
          check={this.handleCheck}
        />
      </div>
    );
  }
}

export default Multi;
