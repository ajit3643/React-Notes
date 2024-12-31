import { Component } from "react";

class Student extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>Your age is {age}</p>
        <hr />
      </>
    );
  }
}

export default Student;
