import React, { Component } from "react";

class DateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { apidata: "", isFetching: false };
  }
  componentWillMount() {
    this.setState({ isFetching: true });
    fetch(`http://numbersapi.com/1/12/date`)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then(response => this.setState({ apidata: response, isFetching: false }))
      .catch(err => console.log("err", err));
  }
  render() {
    return <p>{this.state.isFetching ? "Loading..." : this.state.apidata}</p>;
  }
}

export default DateContainer;
