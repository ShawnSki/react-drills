import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredList: '',
      list: ['axe', 'axel', 'cat', 'axsssss', 'axllll', 'fireball', 'gas can', 'hose']
    }
  }


  handleFilteredList = (typed) => {
    return this.setState({
      filteredList: typed
    })
  }
  
  render() {
    const listShowMe = this.state.list.filter((item, ind) => {
      return item.includes(this.state.filteredList)
    }).map((item, ind) => {
      return <h2 key={ind}>{item}</h2>
    })


    return (
      <div className="App">
        <input onChange={e => this.handleFilteredList(e.target.value)} />
        <div>{listShowMe}</div>
      </div>
    );
  }
}

export default App;
