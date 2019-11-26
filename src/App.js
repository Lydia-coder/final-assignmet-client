import React, { Component } from "react";
import { Route } from "react-router-dom";
// import LoginFormContainer from "./components/LoginFormContainer";
// import SignUpFormContainer from "./components/SignUpFormContainer";
import EventsListContainer from "./components/EventsListContainer";
import TicketListContainer from "./components/TicketListContainer";
import CreateTicketContainer from "./components/CreateTicketContainer";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path="/" component={EventsListContainer} />
        <Route
          exact
          path="/event/:eventId/ticket"
          component={TicketListContainer}
        />
        <Route exact path="/ticket" component={CreateTicketContainer} />
        {/* <Route exact path="/event/:eventId/ticket" component={TicketList} /> */}
      </Provider>
    );
  }
}

export default App;
