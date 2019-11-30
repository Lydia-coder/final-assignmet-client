import React from "react";
import { getTickets } from "../actions";
import { connect } from "react-redux";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets(this.props.match.params.eventId);
    // console.log("where?", this.props.getTickets());
  }

  render() {
    console.log(this.props.tickets, "tickets");
    return <TicketList tickets={this.props.tickets} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  console.log(state, "--->");
  return { tickets: state.tickets, user: state.user };
}

const mapDispatchToProps = { getTickets };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
