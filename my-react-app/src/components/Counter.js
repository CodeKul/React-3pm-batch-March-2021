import React, { Component } from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Inside Constructor");
    super(props);

    this.state = {
      Counter: 0,
    };

    this.increment = () => this.setState({ Counter: this.state.Counter + 1 });
    this.decrement = () => this.setState({ Counter: this.state.Counter - 1 });
  }

  componentDidMount() {
      console.log("Component Did mount")
      console.log("=========================")
  }


  // rendering- displaying the content on browser window

  render() {
    console.log("renderer");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>

        <div className="counter">Counter:{this.state.Counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log("Component Did Update")
      console.log("=========================")
  }

  componentWillUnmount(){
    console.log("Component Will Unmount")
    console.log("=========================")
  }

  shouldComponentUpdate(nextProps, nextState, snapshot){
      return true
    console.log("Component Should Update")
    console.log("=========================")
  }
}
