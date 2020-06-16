import React, { Component } from "react";
import "./App.css";
import Multi from "./Multi";

class App extends Component {
  state = {
    appValue: 0,
  };
  changeValue = (sumOfMulti) => {
    this.setState({
      appValue: sumOfMulti,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="name">Test</div>
        <Multi changeValue={this.changeValue} />
      </div>
    );
  }
}

export default App;
