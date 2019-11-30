import React from "react";
import { connect } from "react-redux";
import { createComment } from "../actions";
import CommentForm from "./CommentForm";
import { getComments } from "../actions";

class CommentFormContainer extends React.Component {
  state = {
    text: ""
  };

  componentDidMount() {
    this.props.getComments(this.props.match.params.ticketId);
  }

  onChange = event => {
    this.setState(
      {
        text: event.target.value
      },
      () => console.log(this.state, "are the comments?")
    );
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createComment(this.state, this.props.match.params.ticketId);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <CommentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        comments={this.props.comments}
        // {...this.props}
      />
    );
  }
}

export default connect(null, { createComment, getComments })(
  CommentFormContainer
);
// what is this error???
