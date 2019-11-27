import React from "react";
import { Link } from "react-router-dom";

export default function TicketList(props) {
  console.log("ticket list", props);
  return (
    <div>
      {props.tickets.map(ticket => (
        <div>
          <img src={ticket.picture} alt={ticket.id} />
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          <Link to={`/ticket/${ticket.id}`}> Ticket details</Link>
        </div>
      ))}
    </div>
  );
}
// neew events get send to database action gets fired new tickets are in redux state but don't render on the page ...?
