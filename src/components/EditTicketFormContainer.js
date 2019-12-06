import React from "react";
import { connect } from "react-redux";
import { updateTicket } from "../actions";
import EditTicketForm from "./EditTicketForm";

class EditTicketFormContainer extends React.Component {
  state = {
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

    this.props.updateTicket(this.state, this.props.match.params.ticketId);
    this.setState({
      price: "",
      description: ""
    });
  };

  render() {
    console.log("are you there?")
    return (
      <div className="container p-5">
        <h1>EDIT TICKET</h1>
        <EditTicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, {updateTicket })(EditTicketFormContainer);
