import React, { Component } from "react";

import "../styles/Multi.css";
import Info from "./Info";
import Data from "./Data";
import Viev from "./Viev";
class Multi extends Component {
  state = {
    value: "",
    numbers: [],
    active: false,
    sumOfMulti: -1,
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
      sumOfMulti: -1,
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
      this.setState({
        sumOfMulti,
        active: true,
      });
    } else {
      this.setState({
        sumOfMulti: 0,
        active: false,
      });
    }
  };

  render() {
    return (
      <div className="Multi">
        <Info sumOfMulti={this.state.sumOfMulti} />
        <Data
          value={this.state.value}
          numbers={this.state.numbers}
          draw={this.handleDraw}
          change={this.handleChange}
          check={this.handleCheck}
        />
        <Viev active={this.state.active} sum={this.state.sumOfMulti} />
      </div>
    );
  }
}

export default Multi;
