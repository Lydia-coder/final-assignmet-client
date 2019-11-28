import React from "react";
import { getEvents } from "../actions";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
    // console.log("where?", this.props.getEvents());
  }

  render() {
    return <EventsList events={this.props.events} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    user: state.user,
    tickets: state.tickets
    // comment: state.comment
  };
}

const mapDispatchToProps = { getEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);
