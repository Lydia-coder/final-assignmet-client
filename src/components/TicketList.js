import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    console.log(this.props.tickets, "WWWWTTTTTFFFF");
    return (
      <div>
        {this.props.tickets.map(ticket => (
          <div key={ticket.price}>
            {/* <Link to={`/event/${event.id}/ticket`}> */}
            {ticket.name} {ticket.description}
            {/* </Link> */}
            <img alt={ticket.picture} src={ticket.description} />
          </div>
        ))}
      </div>
    );
  }
}
// bug 1 id undifiend
//bug 2 cant see console.log of action
//bug 3 props are empty
