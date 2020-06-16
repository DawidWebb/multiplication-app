import React, { Component } from "react";

import "./Multi.css";
import Data from "./Data";
import Viev from "./Viev";
class Multi extends Component {
  state = {
    value: "",
    numbers: [],
    active: false,
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
      this.changeViev();
    } else {
      return console.log("LOSE");
    }
  };
  changeViev = () => {
    this.setState({
      active: true,
    });
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
        <Viev active={this.state.active} />
      </div>
    );
  }
}

export default Multi;
