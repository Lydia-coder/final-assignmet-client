import { ONE_TICKET, UPDATED_TICKET } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ONE_TICKET:
      return action.payload;
      case UPDATED_TICKET:
        return state.filter(ticket => {
          if(ticket._id !== action.payload._id)return  Object.assign({}, action.payload)
          return ticket
        })

    default:
      return state;
  }
}

// ...state.filter(cat => cat.id !== action.cat.id),
//         Object.assign({}, action.cat)