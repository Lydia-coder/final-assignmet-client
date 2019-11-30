import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Link to={`/ticket/${props.tickets.id}/comment`}>
        <Button>Comments</Button>
      </Link>
      {props.comments.map((comment, i) => (
        <div key={`${i}-data`}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
