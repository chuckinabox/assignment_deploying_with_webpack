import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeContainer extends Component {
  render() {
    return (
      <p>
        Check Out <Link to="/number">Numbers</Link> or{" "}
        <Link to="/date">Dates</Link>{" "}
      </p>
    );
  }
}

export default HomeContainer;
