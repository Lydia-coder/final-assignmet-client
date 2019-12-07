import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";
export const NEW_TICKET = "NEW_TICKET";
export const ALL_TICKETS = "ALL_TICKETS";
export const ONE_TICKET = "ONE_TICKET";
export const NEW_COMMENT = "NEW_COMMENT";
export const ALL_COMMENTS = " ALL_COMMENTS";
export const UPDATED_TICKET = "UPDATED_TICKET";
// export const GET_PAGES = "GET_PAGES";
export const OFFSET = "OFFSET";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (username, password) => dispatch => {
  return (
    request
      .post(`${baseUrl}/login`)
      // .set(Authorization, Bearer ${jwt})
      .send({ username, password })
      .then(res => {
        const action = jwt(res.body.jwt);
        return dispatch(action);
      })
      .catch(error => {
        if (error.response) {
          return Promise.reject(error.response.body.message);
        }
        return Promise.reject(error);
      })
  );
};

export const signUp = data => (dispatch, getState) => {
  return request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body);
      return Promise.resolve();
    })
    .catch(error => {
      if (error.response) {
        return Promise.reject(error.response.body.message);
      }
      return Promise.reject(error);
    });
};

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/events`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newEvent(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export function offset(payload) {
  return {
    type: OFFSET,
    payload
  };
}

export const getEvents = data => (dispatch, getState) => {
  // data.buttonType is either prev or next

  const state = getState();
  console.log("ALL STATE ", data);
  const { events } = state;
  const currentOffset = parseInt(data.getOffset || 0);
  let prepareCurrentOffsetForStore;

  if (data.buttonType === "next") {
    prepareCurrentOffsetForStore = currentOffset + 9;
  } else if (data.buttonType === "prev") {
    // check if currentOffset is >= 9
    prepareCurrentOffsetForStore = currentOffset - 9;
  } else {
    prepareCurrentOffsetForStore = 0;
  }
  const offsetAction = offset(prepareCurrentOffsetForStore);
  //if (!events.length) {
  request(`${baseUrl}/event?limit=9&offset=${prepareCurrentOffsetForStore}`)
    .then(response => {
      const action = allEvents(response.body);

      dispatch(action);
      dispatch(offsetAction);
    })
    .catch(console.error);
  //}
};

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = eventId => dispatch => {
  request(`${baseUrl}/event/${eventId}/ticket`)
    .then(res => {
      console.log("GETTICKETS??", res);
      const action = allTickets(res.body);
      console.log(action, "ACTIONTICKET");
      dispatch(action);
    })
    .catch(console.error);
};

export function newTicket(payload) {
  console.log(payload, "NEWW???");
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = (data, eventId) => (dispatch, getState) => {
  console.log("Event Id", eventId);
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      console.log(response);
      const action = newTicket(response.body);

      dispatch(action);
    })
    .catch(error => console.log("error occured", error));
};

function oneTicket(payload) {
  return {
    type: ONE_TICKET,
    payload
  };
}

export const getTicket = ticketId => dispatch => {
  request(`${baseUrl}/ticket/${ticketId}`)
    .then(res => {
      console.log("response is here", res);
      console.log("RESPONSE??", res);
      const action = oneTicket(res.body);
      console.log(action, "TICKET");
      return dispatch(action);
    })
    .catch(console.error);
};

export function newComment(payload) {
  console.log(payload, "COMMENT???");
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = (data, ticketId) => (dispatch, getState) => {
  console.log("Ticket Id", ticketId);
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      console.log(response, "what is the response?");
      const action = newComment(response.body);

      dispatch(action);
      console.log(action, "what is in this action?");
    })
    .catch(console.error);
};
// create action all comments
function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  };
} //wait safe

export const getComments = ticketId => dispatch => {
  request(`${baseUrl}/ticket/${ticketId}/comment`)
    .then(res => {
      console.log("GET COMMENTS?", res);
      const action = allComments(res.body);
      console.log(action, "CoMMENT?");
      dispatch(action);
    })
    .catch(console.error);
};

function ticketUpdated(payload) {
  return {
    type: UPDATED_TICKET,
    payload
  };
}
export const updateTicket = (data, ticketId) => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .put(`${baseUrl}/ticket/${ticketId}`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(res => {
      console.log("IS THERE DATA", data);
      console.log("UPDATE TICKET", res);
      const action = ticketUpdated(res.body);
      console.log("UPDATE ACTION", action);
      return dispatch(action);
    })
    .catch(error => console.log("error occured", error));
};

// function getPages(payload) {
//   return {
//     type: GET_PAGES,
//     payload
//   };
// }

// export const pages = data => dispatch => {
//   request
//     .get(`${baseUrl}/page?limit=${data.getLimit}&offset=${data.getOffset}`)
//     .send(data)
//     .then(res => {
//       const action = getPages(res.body);
//       console.log(res.body);
//       dispatch(action);
//     });
// };
