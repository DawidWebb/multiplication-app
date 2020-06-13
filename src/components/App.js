import React, { Component } from "react";
import "./App.css";
import StartViev from "./StartViev";
import Multi from "./Multi";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="name">Test</div>
        <Multi />
        <StartViev />
      </div>
    );
  }
}

export default App;
