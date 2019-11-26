import React from "react";
import SignUpFormContainer from "./SignUpFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import CreateEventContainer from "./CreateEventContainer";

import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <div>
      <div>
        <LoginFormContainer />
        <SignUpFormContainer />
      </div>

      {props.user && <CreateEventContainer />}

      {props.events.map(event => (
        <div key={event.id}>
          <Link to={`/event/${event.id}/ticket`}>
            {event.name} {event.description}
          </Link>
          <img alt={event.name} src={event.image} />
        </div>
      ))}
    </div>
  );
}
