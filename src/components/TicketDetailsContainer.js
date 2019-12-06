import React from "react";
import { getTicket, getComments } from "../actions";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("TICKETID?", this.props.match.params.ticketId);
    this.props.getTicket(this.props.match.params.ticketId);
    this.props.getComments(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div className="container">
        <TicketDetails
          tickets={this.props.tickets}
          comments={this.props.comments}
          singleticket={this.props.match.params.ticketId}
          ticket={this.props.ticket}
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
    comments: state.comments,
    ticket: state.ticket
  }; ///
}

export default connect(mapStateToProps, { getTicket, getComments })(
  TicketDetailsContainer
);
