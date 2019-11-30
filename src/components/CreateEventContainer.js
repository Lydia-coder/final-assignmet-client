import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions";
import CreateEvent from "./CreateEvent";

class CreateEventContainer extends React.Component {
  state = {
    image: "",
    name: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createEvent(this.state);
    this.setState({
      name: "",
      image: "",
      description: "",
      startDate: "",
      endDate: ""
    });
    this.props.toggleCreateEventModal(false);
  };

  render() {
    return (
      <CreateEvent
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        {...this.props}
      />
    );
  }
}

export default connect(null, { createEvent })(CreateEventContainer);
