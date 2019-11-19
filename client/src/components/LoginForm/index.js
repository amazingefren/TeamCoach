import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Check required fields
    if(!this.state.email || !this.state.password ) {
      this.setState({error: "Please enter your information"})
    }
    if (this.state.email === "admin") {
      window.location = "/admin";
    } else if (this.state.email === "manager") {
      window.location = "/main";
    }
    // axios
    //     .get('login/auth', {
    //         email: this.state.email,
    //         password: this.state.password
    //     })
    //     .then(response =>{
    //         console.log(response)
    //     })
  };

  render() {
    return (
      <div>
        <h1 className="loginTitle">
          <img src="./images/logo.svg" alt="Logo" className="logo" /> Team
          <span className="companyName">Coach</span>
        </h1>
        <span className="loginError">{this.state.error}</span>
        <form>
          <p className="loginFieldTitle">User Name:</p>
          <input
            type="text"
            className="loginField"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          ></input>
          <p className="loginFieldTitle">Password:</p>
          <input
            type="password"
            className="loginField"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="submit"
            value="Login"
            className="loginSubmit"
            onClick={this.handleFormSubmit}
          ></input>
        </form>
      </div>
    );
  }
}

export default Login;
