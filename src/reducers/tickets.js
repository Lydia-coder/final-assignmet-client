import { ALL_TICKETS,NEW_TICKET } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_TICKETS:
      console.log(action.payload, "ARRRAY?");
      return action.payload;
      case NEW_TICKET:
          return [action.payload, ...state];
     // new ticket to state
    default:
      return state;
  }
}
