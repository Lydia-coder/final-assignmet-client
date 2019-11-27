import React from "react";
import CommentFormContainer from "./CommentFormContainer";
export default function TicketDetails(props) {
  console.log("HEEEELO", props);
  return (
    <div>
      <CommentFormContainer />
      <h1>Ticket Details</h1>
      <p>{props.tickets.price}</p>
    </div>
  );
}
