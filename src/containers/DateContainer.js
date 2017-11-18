import React, { Component } from "react";

class DateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "Enter Day for fact",
      isFetching: false,
      month: "1",
      day: "1"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      isFetching: true
    });
    let valueMonth;
    let valueDay;
    if (event.currentTarget.name === "day") {
      valueDay = event.currentTarget.value;
      valueMonth = this.state.month;
    } else {
      valueDay = this.state.day;
      valueMonth = event.currentTarget.value;
    }
    fetch(`http://numbersapi.com/${valueMonth}/${valueDay}/date`)
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
        <select name="month" onChange={this.handleChange}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select name="day" onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </div>
    );
  }
}

export default DateContainer;
