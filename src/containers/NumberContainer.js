import React, { Component } from "react";

class NumberContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { apidata: "", isFetching: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ isFetching: true });
    let valueTarget = event.currentTarget.value;
    if (!valueTarget.length) {
      valueTarget = "random";
    }
    fetch(`http://numbersapi.com/${valueTarget}/math`)
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
    return (
      <div>
        <p>{this.state.isFetching ? "Loading..." : this.state.apidata}</p>
        <input type="number" onChange={this.handleChange} />
        <select>
          <option value="trivia">Trivia</option>
          <option value="math">Math</option>
          <option value="year">Year</option>
        </select>
      </div>
    );
  }
}

export default NumberContainer;
