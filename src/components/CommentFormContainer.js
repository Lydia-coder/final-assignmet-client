import React from "react";
import { createComment } from "../actions";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";

class CommentFormContainer extends React.Component {
  componentDidMount() {
    this.props.createComment(this.props.match.params.ticketId);
    // console.log("where?", this.props.getEvents());
  }

  render() {
    return <CommentForm comment={this.props.comment} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return { tickets: state.tickets };
}

const mapDispatchToProps = { createComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormContainer);
