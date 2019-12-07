import React from "react";
import { getEvents } from "../actions";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    const data = {
      getOffset: 0,
      buttonType: null
    }
    this.props.getEvents(data);

    //this.props.getPages(this.props.match.params.getLimit,this.props.match.params.getOffset)
    // console.log("where?", this.props.getEvents());
  }

  render() {
    return <EventsList events={this.props.events} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  console.log(state, "PROPS?");
  return {
    events: state.events,
    user: state.user,
    offset: state.offset
    // tickets: state.tickets
    // comment: state.comment
  };
}

const mapDispatchToProps = { getEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);


// initalaize offset store = 0