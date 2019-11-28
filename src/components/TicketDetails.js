import React from "react";

import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";

export default function TicketDetails(props) {
  const { tickets } = props;
  console.log("PROPS FOR COMMENT", props);
  return (
    <div>
      <h1>Ticket Details</h1>
      PRICE: <p>{tickets.price}</p>
      DESCRIPTION:<p>{tickets.description}</p>
      <CommentForm />
      {/* <Link to={} ></Link> */}
    </div>
  );
}
