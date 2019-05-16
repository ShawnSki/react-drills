import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleLoginAlert = () => {
    alert(
      `Username: ${this.state.username} | Password: ${this.state.password}`
      )
    }
    
    render() {
    
    return (
      <header>
        <h1>Login Screen</h1>
        <input placeholder='username' name='username' onChange={this.handleInput} />
        <input placeholder='password' name='password' onChange={this.handleInput} />
        <button onClick={this.handleLoginAlert}>Login</button>
      </header>

    )
  }
}

export default Login;