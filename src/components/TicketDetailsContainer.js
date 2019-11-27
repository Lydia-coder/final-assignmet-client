import React from "react";
import { getTicket } from "../actions";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
    // console.log("where?", this.props.getEvents());
  }

  render() {
    return (
      <TicketDetails tickets={this.props.tickets} user={this.props.user} />
    );
  }
}

function mapStateToProps(state) {
  return { tickets: state.tickets };
}

const mapDispatchToProps = { getTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
