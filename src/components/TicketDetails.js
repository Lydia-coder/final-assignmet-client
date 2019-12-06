import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function TicketDetails(props) {
  console.log("ARE THERE ANY PROPS??", props);

  console.log("PROPS FOR Details?", props);
  return (
    <div className="card p-3 mt-5">
      <h1>Ticket Details</h1>
      <h5>
        PRICE:
        <Badge variant="success" className="ml-2">
          $ {props.ticket.price}
        </Badge>
      </h5>
      DESCRIPTION:
      <p>{props.ticket.description}</p>
      Ticket Risk:
      {props.ticket.risk}%
      <Link to={`/ticket/${props.singleticket}/comment`}>
        <Button>Comments</Button>
      </Link>
      {props.comments.map((comment, i) => (
        <div key={`${i}-data`}>
          <p>{comment.text}</p>
          
        </div>
      
      ))}
      <div>
     
      <Link to="/"> 
        <Button variant="danger">Go back</Button>
      </Link>
      </div>
    </div>
  );
}
// go back button should link to ticket list