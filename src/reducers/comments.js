import { NEW_COMMENT } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case NEW_COMMENT:
      return action.payload;
    default:
      return state;
  }
}
