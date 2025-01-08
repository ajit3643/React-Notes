import React from "react";
import TimerOne from "./Components/Timer/TimerOne.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mount: true
    }
  }

  handleMount = () => {
    this.setState((prevState) => {
      return {
        mount: !prevState.mount
      }
    })
  };

  render() {
    return (
      <>
        <button onClick ={this.handleMount}>{this.state.mount ? "Un-Mount": "Mount"}</button>
        {this.state.mount? <TimerOne />: null}
      </>
    );
  }
}

export default App;
