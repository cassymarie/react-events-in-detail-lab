// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
        onReceiveCoordinates: []
    };
  }

  handleClick = (e) => {
    // Update our state here...
   // this.setState({hasBeenClicked: true},() => console.log(this.state.hasBeenClicked))
//    debugger
   this.setState({onReceiveCoordinates: [e.clientX, e.clientY]},() => console.log(this.state.onReceiveCoordinates))
    
    
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>CoordinatesButton</button>
      </div>
    );
  }
}

export default CoordinatesButton;