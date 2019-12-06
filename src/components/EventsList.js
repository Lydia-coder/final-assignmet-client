import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Card,
  Modal
} from "react-bootstrap";
import SignUpFormContainer from "./SignUpFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import CreateEventContainer from "./CreateEventContainer";

import { Link } from "react-router-dom";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginModalVisible: false,
      SignupModalVisible: false,
      CreateEventModalVisible: false
    };
  }

  toggleLoginModal = value => {
    this.setState({
      LoginModalVisible: value
    });
  };

  toggleSignupModal = value => {
    this.setState({
      SignupModalVisible: value
    });
  };

  toggleCreateEventModal = value => {
    this.setState({
      CreateEventModalVisible: value
    });
  };

  render() {
    const { events, user } = this.props;
    const {
      CreateEventModalVisible,
      LoginModalVisible,
      SignupModalVisible
    } = this.state;
    return (
      <div className="container">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">TICKET SWAP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {!user && (
                <>
                  <Nav.Link onClick={() => this.toggleLoginModal(true)}>
                    Login
                  </Nav.Link>
                  <Nav.Link onClick={() => this.toggleSignupModal(true)}>
                    Sign Up
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link onClick={() => this.toggleCreateEventModal(true)}>
                    Create Event
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="mt-4">
          {events.map(event => (
            <Col xs={4}>
              <Card>
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Card.Title>
                    <Link to={`/event/${event.id}/ticket`}>
                      <h4>{event.name}</h4>
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    <p>{event.description}</p>
                    <hr />
                    <p>Starts: {event.startDate}</p>
                    <p>Ends: {event.endDate}</p>
                  </Card.Text>

                  <Link to={`/event/${event.id}/ticket/create`}>
                    <Button variant="primary">Create ticket</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <LoginFormContainer
          LoginModalVisible={LoginModalVisible}
          toggleLoginModal={this.toggleLoginModal}
        />
        <SignUpFormContainer
          SignupModalVisible={SignupModalVisible}
          toggleSignupModal={this.toggleSignupModal}
        />
        <CreateEventContainer
          CreateEventModalVisible={CreateEventModalVisible}
          toggleCreateEventModal={this.toggleCreateEventModal}
        />
        {/* <div>
        <LoginFormContainer />
          <SignUpFormContainer />
        </div> */}
        {/* {user && <CreateEventContainer />} */}

        {/* {events.map(event => (
          <div key={event.id}>
            <Link to={`/event/${event.id}/ticket`}>
              {event.name} {event.description}
            </Link>
            <Link to={`/event/${event.id}/ticket/create`}>Create ticket</Link>
            <p>
              {event.name} {event.description}
            </p>
            Start-Date <p>{event.startDate}</p>
            End-Date<p>{event.endDate}</p>
            <img alt={event.name} src={event.image} />
          </div>
        ))} */}
      </div>
    );
  }
}

export default EventList;

// export default function List(props) {
//   if (events === null) {
//     return <h1>No events</h1>;
//   }

// }
