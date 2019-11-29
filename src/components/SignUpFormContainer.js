import React, { Component } from "react";
import { connect } from "react-redux";
//import { createUser } from "../actions";
import { signUp } from "../actions";
import { Modal, Button, Form, Alert } from "react-bootstrap";

class SignUpFormContainer extends Component {
  state = { username: "", password: "", errorMessage: "", successMessage: "" };
  onChange = event => {
    console.log("onchange signup");
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    console.log("onSubmit signup", this.state.username);
    const { toggleSignupModal } = this.props;
    event.preventDefault();
    this.setState({
      errorMessage: ""
    });
    this.props
      .signUp({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.setState(
          {
            successMessage: "Account created successfully, login to continue"
          },
          () =>
            setTimeout(() => {
              toggleSignupModal(false);
            }, 3000)
        );
      });
  };
  render() {
    const { SignupModalVisible, toggleSignupModal } = this.props;
    const { username, password, errorMessage, successMessage } = this.state;
    return (
      <div>
        <Modal
          show={SignupModalVisible}
          onHide={() => toggleSignupModal(false)}
        >
          <Form onSubmit={this.onSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Create an Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => toggleSignupModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default connect(null, { signUp })(SignUpFormContainer);
