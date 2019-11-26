import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
//import { createUser } from "../actions";
import { signUp } from "../actions";

class SignUpFormContainer extends Component {
  state = { username: "", password: "" };
  onChange = event => {
    console.log("onchange signup");
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    console.log("onSubmit signup", this.state.username);
    event.preventDefault();
    this.props.signUp({
      username: this.state.username,
      password: this.state.password
    });
  };
  render() {
    return (
      <div>
        <SignUpForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}
export default connect(null, { signUp })(SignUpFormContainer);
