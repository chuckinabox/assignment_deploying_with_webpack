import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NumberContainer from "../containers/NumberContainer";
import DateContainer from "../containers/DateContainer";
import HomeContainer from "../containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h3>
            Number facts (<small>From numbersapi.com</small>)
          </h3>
          <br />
          <Link to="/">Home</Link> <Link to="/number">Numbers</Link>{" "}
          <Link to="/date">Dates</Link>
          <Switch>
            <Route exact path="/date" component={DateContainer} />
            <Route exact path="/number" component={NumberContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Route path="/" render={() => <p>Error: No Directory</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
