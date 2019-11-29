import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Modal, Button, Form, Alert } from "react-bootstrap";

class LoginFormContainer extends Component {
  state = { username: "", password: "", errorMessage: "" };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    console.log("login");
    event.preventDefault();
    this.setState({
      errorMessage: ""
    });
    this.props
      .login(this.state.username, this.state.password)
      .then(() => {
        this.props.toggleLoginModal(false);
      })
      .catch(error => {
        this.setState({
          errorMessage: error
        });
      });
  };

  // componentDidUpdate() {
  //   if (this.props.user.length !== 0) {
  //     this.props.history.push("/event"); //  => try to understand...
  //   }
  // }
  render() {
    const { toggleLoginModal, LoginModalVisible } = this.props;
    const { username, password, errorMessage } = this.state;
    return (
      <Modal show={LoginModalVisible} onHide={() => toggleLoginModal(false)}>
        <Form onSubmit={this.onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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
            <Button variant="secondary" onClick={() => toggleLoginModal(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { login })(LoginFormContainer);
