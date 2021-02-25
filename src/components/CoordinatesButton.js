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
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
    
    
  };

  render() {
    return (
        <button onClick={this.handleClick}>Coords</button>
    );
  }
}

export default CoordinatesButton;