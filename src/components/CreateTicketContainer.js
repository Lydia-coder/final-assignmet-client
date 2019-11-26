import React from "react";
import { connect } from "react-redux";
import { newTicket } from "../actions";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends React.Component {
  state = {
    picture: "",
    price: "",
    description: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.newTicket(this.state);
    this.setState({
      price: "",
      picture: "",
      description: ""
    });
  };

  render() {
    return (
      <div>
        <CreateTicket
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <div>HELLLLO</div>
      </div>
    );
  }
}

export default connect(null, { newTicket })(CreateTicketContainer);
