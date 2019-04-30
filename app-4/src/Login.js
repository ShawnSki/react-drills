import React, { Component } from 'react'

class Login extends Component {
    constructor() {
      super()
  
      this.state = {
        username: '',
        password: ''
      }
      this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameUpdate(name) {
      this.setState({username: name})
    }
  
    handlePasswordUpdate(pass) {
      this.setState({password: pass})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password ${this.state.password}`)
    }

    render() {
        console.log(this.props)
        return(
            <header>
                <input onChange={ (e) => this.handleUsernameUpdate(e.target.value)}></input>
                <input onChange={ (e) => this.handlePasswordUpdate(e.target.value)}></input>
                <button onClick={ this.handleLogin}>Login</button>
            </header>

        )
    }
}

export default Login;