import React from "react";
import { getTicket, createComment } from "../actions";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import CommentForm from "./CommentForm";

class TicketDetailsContainer extends React.Component {
  state = {
    comment: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.values
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.createComment(this.state, this.props.match.params.ticketId);
    this.setState({
      comment: ""
    });
  };

  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetails tickets={this.props.tickets} user={this.props.user} />
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          comment={this.props.comment}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //   console.log(comment.state, "COMMENT STATE");
  return { tickets: state.tickets, comment: state.comment };
}

const mapDispatchToProps = { getTicket, createComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
