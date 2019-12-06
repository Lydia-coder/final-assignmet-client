import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Button, Badge } from "react-bootstrap";



export default function TicketList(props) {
  const { eventId } = props;
  console.log("EVENTID ", props);
  console.log("ticket list", props.tickets);
  return (
    <div className="container">
      <h1>TICKET LIST</h1>
      
      <ListGroup>
     
        {props.tickets.map(ticket => (
          <ListGroup.Item className="my-1">
            <div className="d-flex justify-content-between">
              <p>{ticket.description}</p>
              <h3>
                <Badge variant="success" className="mr-1">
                  ${ticket.price}
                </Badge>
                <Link to={`/ticket/${ticket.id}`}>
                  <Button className="mr-1">View details</Button>
                </Link>
                <Link to={`/event/${eventId}/ticket/${ticket.id}/edit`}>
                  <Button className="mr-4">Edit Ticket</Button>
                </Link> 
              </h3>
             
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
// neew events get send to database action gets fired new tickets are in redux state but don't render on the page ...?
