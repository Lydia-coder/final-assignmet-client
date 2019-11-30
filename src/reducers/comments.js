import { NEW_COMMENT, ALL_COMMENTS } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case NEW_COMMENT:
      return [...state, action.payload];
    case ALL_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
