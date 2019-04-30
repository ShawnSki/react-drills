import React, { Component } from "react";
import "./App.css";
import Image from './Image'


class App extends Component {
  constructor(){
    super()

    this.state = {
      image: 'http://shawnski.com/wp-content/uploads/2017/10/DSCF3482.jpg'
  }
  }
  render() {
    return (
      <div className="App">
        <Image myImage={this.state.image} />
      </div>
    );
  }
}

export default App;
