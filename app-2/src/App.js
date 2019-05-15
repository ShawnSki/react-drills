import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data = ['bike', 'jeep', 'tent', 'dog', 'skis']
    }
  }
  render() {
    const packList = this.state.data.map((item, i) => {
      return <h1 key={i}>{item}</h1>
    })
    
    return (
      <div className="App">
        {packList}
      </div>
    );
  }
}

export default App;
