import React, { Component } from "react";

class NumberContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "Enter Number for Trivia/Math/Year fact",
      isFetching: false,
      number: "",
      type: "trivia"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      isFetching: true
    });
    let valueNumber;
    let valueType;
    if (event.currentTarget.name === "number") {
      valueNumber = event.currentTarget.value;
      valueType = this.state.type;
    } else {
      valueNumber = this.state.number;
      valueType = event.currentTarget.value;
    }
    if (!valueNumber.length) {
      valueNumber = "random";
    }
    fetch(`http://numbersapi.com/${valueNumber}/${valueType}`)
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
        <input type="number" name="number" onChange={this.handleChange} />
        <select name="type" onChange={this.handleChange}>
          <option value="trivia">Trivia</option>
          <option value="math">Math</option>
          <option value="year">Year</option>
        </select>
      </div>
    );
  }
}

export default NumberContainer;
