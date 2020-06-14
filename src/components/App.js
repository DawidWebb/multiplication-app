import React, { Component } from "react";
import "./App.css";
import StartViev from "./StartViev";
import Multi from "./Multi";

class App extends Component {
  state = {
    appValue: 0,
  };
  changeValue = (sumOfMulti) => {
    console.log(sumOfMulti);
    this.setState({
      appValue: sumOfMulti,
    });
    console.log(this.state.appValue);
  };

  render() {
    return (
      <div className="App">
        <div className="name">Test</div>
        <Multi changeValue={this.changeValue} />
        <StartViev appValue={this.state.appValue} />
      </div>
    );
  }
}

export default App;
