import React from "react";
import { getTicket, getComments } from "../actions";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
    this.props.getComments(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div className="container">
        <TicketDetails
          tickets={this.props.tickets || []}
          comments={this.props.comments || []}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "new state");
  //   console.log(tickets.state, "TICKETS STATE");
  return {
    tickets: state.tickets,
    comments: state.comments
  }; ///
}

export default connect(mapStateToProps, { getTicket, getComments })(
  TicketDetailsContainer
);
