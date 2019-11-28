import { ALL_TICKETS, NEW_TICKET, ONE_TICKET } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_TICKETS:
      return action.payload;
    case NEW_TICKET:
      return [action.payload, ...state]; // new ticket to state
    case ONE_TICKET:
      return action.payload;
    default:
      return state;
  }
}
