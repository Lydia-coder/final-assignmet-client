import React from "react";
import { Badge } from "react-bootstrap";

export default function TicketDetails(props) {
  //   const { tickets } = props;
  console.log("PROPS FOR Details?", props);
  return (
    <div className="card p-3 mt-5">
      <h1>Ticket Details</h1>
      <h5>
        PRICE:
        <Badge variant="success" className="ml-2">
          {props.tickets.price}
        </Badge>
      </h5>
      DESCRIPTION:<p>{props.tickets.description}</p>
    </div>
  );
}
