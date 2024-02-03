import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { color: "cyan" };
  }
  render() {
    return (
      <div>
        <h1>{this.props.animal}</h1>
        <h2>{this.state.color}</h2>
      </div>
    );
  }
}

export default Demo;
