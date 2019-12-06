import { GET_PAGES } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_PAGES:
      return action.payload
     
    default:
      return state;
  }
}
