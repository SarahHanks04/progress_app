import "react-dom";
import React from "react";
import "../../App.css";

class HomeScreen extends React.Component {
  state = {
    counter: "0",
    name: "Obi",
  };

  incrementCounter = () =>
    this.setState({ counter: parseInt(this.state.counter) + 1 });

  shouldComponentUpdate() {
    return this.state.counter <= 10;
  }
  getSnapshotBeforeUpdate(prevState, NextState) {
    console.log("I am previous state : " + prevState.counter);
    console.log("I am next state : " + NextState);
  }
  componentDidUpdate() {
    console.log("It has show ooooo or render on the screen");
  }
  render() {
    return (
      <div>
        {this.state.name} is good at {this.state.counter} days of the week.
        <button onClick={this.incrementCounter}>Increase</button>
      </div>
    );
  }
}

export default HomeScreen;
