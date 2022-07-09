import React, { Component } from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { apiLogout, login } from "../services/auth.service";

class LoginLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
    };
  }
  setRequestFailed = () => {
    this.setState({ requestFailed: true });
  };

  handle_login = (e, data) => {
    login(data.username, data.password, this.setRequestFailed);
    e.preventDefault();
  };

  handle_logout = () => {
    apiLogout();
  };

  render() {
    if (this.state.requestFailed) {
      return (
        <div className="LoginForm">
          <LoginForm handle_login={this.handle_login} errorMessage={true} />
        </div>
      );
    } else {
      return (
        <div className="LoginForm">
          <LoginForm handle_login={this.handle_login} />
        </div>
      );
    }
  }
}

export default LoginLogout;
