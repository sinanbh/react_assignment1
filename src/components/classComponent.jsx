import React from "react";

const styelObj = {
  color: 'blue'
}

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="box2">
        <h2>This is created using class Component</h2>
        <p>This is done using external CSS</p>
        <p style={styelObj}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default ClassComponent;
