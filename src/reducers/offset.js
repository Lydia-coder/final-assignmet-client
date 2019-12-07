import { OFFSET } from "../actions";

const defaultValue = 0;

export default function(state = "", action = {}) {
  console.log("Reducer ", action.payload);
  switch (action.type) {
    case OFFSET:
      return action.payload;

    default:
      return state;
  }
}
