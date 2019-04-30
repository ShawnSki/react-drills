import React, { Component } from "react";
import "./App.css";
import Login from "./Login"

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
      this.handleUsernamUpdate = this.handleUsernamUpdate.bind(this)
      this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)
  }

  handleUsernamUpdate(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordUpdate(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Login 
        usernameMethod={this.handleUsernameUpdate} 
        passwordMethod={this.handlePasswordUpdate} />
      </div>
    );
  }
}

export default App;
