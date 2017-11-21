import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import NumberContainer from "../containers/NumberContainer";
import DateContainer from "../containers/DateContainer";
import HomeContainer from "../containers/HomeContainer";
import RaisedButton from "material-ui/RaisedButton";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h3>
            Number facts (<small>From numbersapi.com</small>)
          </h3>
          <br />
          <NavLink activeStyle={{ color: "gray" }} exact to="/">
            <RaisedButton primary={true} label="Home" />
          </NavLink>{" "}
          <NavLink activeStyle={{ color: "gray" }} exact to="/number">
            <RaisedButton primary={true} label="Numbers" />
          </NavLink>{" "}
          <NavLink activeStyle={{ color: "gray" }} exact to="/date">
            <RaisedButton primary={true} label="Dates" />
          </NavLink>
          <Switch>
            <Route exact path="/date" component={DateContainer} />
            <Route exact path="/number" component={NumberContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Route render={() => <p>Error: No Directory</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
