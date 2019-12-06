import { combineReducers } from "redux";
import user from "./users";
import events from "./events";
import tickets from "./tickets";
import comments from "./comments";
import ticket from "./ticket";
export default combineReducers({
  user,
  events,
  tickets,
  comments,
  ticket
});
