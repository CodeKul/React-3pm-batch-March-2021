import React, { Component } from "react";

export default class ComponentThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      firstName: "Swapnil",
      lastName: "Bhosale",
      status: "true",
    };
  }

toggleShow = () => {
  this.setState(state => ({
    status: !state.status
  }));
}

  render() {
    const greeting = "Welcome to React App";

    let person = {
      firsName: "Sanket",
      lastName: "Bhosale",
    };

    const Greeting = (props) => <h1>{props.greeting}</h1>;

    const ChildComponent = (props) => {
      return <p>{person.lastName}</p>;
    };

    const Component2 = (props) => {
      return <p>{props.value}</p>;
    };

    const Hello = (props) => <h1>{props.greeting}</h1>

    return (
      <div>

{this.state.status ? 
<Greeting greeting={greeting}/>:null}

        <h1>Hi This is {person.firsName} </h1>
        <h1>{greeting}</h1>
        <Greeting greeting={greeting} />

        <ChildComponent name="First Child" />

        <Component2 value="30" />

        <Hello greeting={greeting} />

        <ChildComponent lastName />

        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
