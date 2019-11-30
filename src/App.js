import React, { Component } from "react";
import { Route } from "react-router-dom";
import CommentFormContainer from "./components/CommentFomContainer";
import EventsListContainer from "./components/EventsListContainer";
import TicketListContainer from "./components/TicketListContainer";
import CreateTicketContainer from "./components/CreateTicketContainer";
import TicketDetailsContainer from "./components/TicketDetailsContainer";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path="/" component={EventsListContainer} />
        <Route
          path="/event/:eventId/ticket/create"
          component={CreateTicketContainer}
        />
        <Route
          exact
          path="/event/:eventId/ticket"
          component={TicketListContainer}
        />
        <Route path="/ticket/:ticketId" component={TicketDetailsContainer} />

        <Route
          path="/ticket/:ticketId/comment"
          component={CommentFormContainer}
        />
      </Provider>
    );
  }
}

export default App;
