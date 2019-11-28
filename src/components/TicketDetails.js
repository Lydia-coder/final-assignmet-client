import React from "react";

export default function TicketDetails(props) {
  //   const { tickets } = props;
  console.log("PROPS FOR COMMENT", props);
  return (
    <div>
      <h1>Ticket Details</h1>
      PRICE: <p>{props.tickets.price}</p>
      DESCRIPTION:<p>{props.tickets.description}</p>
    </div>
  );
}
