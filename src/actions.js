import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";
export const NEW_TICKET = "NEW_TICKET";
export const ALL_TICKETS = "ALL_TICKETS";
export const ONE_TICKET = "ONE_TICKET";
export const NEW_COMMENT = "NEW_COMMENT";

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    // .set(Authorization, Bearer ${jwt})
    .send({ username, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      dispatch(action);
    });
};

export const signUp = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body);
    })
    .catch(console.error);
};

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState();
  const { jwt } = state;

  request
    .post(`${baseUrl}/events`)
    .set("Authorization", `Bearer ${jwt}`)
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

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        const action = allEvents(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = eventId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/event/${eventId}/ticket`)
      .then(res => {
        console.log("GETTICKETS??", res);
        const action = allTickets(res.body);
        console.log(action, "ACTIONTICKET");
        dispatch(action);
      })
      .catch(console.error);
  }
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
  const { jwt } = state;
  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      console.log(response);
      const action = newTicket(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

function oneTicket(payload) {
  return {
    type: ONE_TICKET,
    payload
  };
}

export const getTicket = ticketId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/event/${ticketId}`)
      .then(res => {
        console.log("RESPONSE??", res);
        const action = oneTicket(res.body);
        console.log(action, "TICKET");
        dispatch(action);
      })
      .catch(console.error);
  }
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
  const { jwt } = state;
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      console.log(response, "what is the response?");
      const action = newComment(response.body);

      dispatch(action);
      console.log(action, "what is in this action?");
    })
    .catch(console.error);
};
