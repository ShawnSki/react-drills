import React, { Component } from "react";
import "./App.css";
import Image from './Image';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Image myImage={'http://shawnski.com/wp-content/uploads/2017/10/utah_adventure_photographer-1908.jpg'} />
      </div>
    );
  }
}

export default App;