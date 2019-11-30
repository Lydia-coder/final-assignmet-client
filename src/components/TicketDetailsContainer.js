import React from "react";
import { getTicket } from "../actions";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div className="container">
        <TicketDetails tickets={this.props.tickets} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //   console.log(tickets.state, "TICKETS STATE");
  return { tickets: state.tickets };
}

export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer);
