// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
        onDelayedClick: '',
        number: 0
    };
  }

  handleClick = (e) => {
    // Update our state here...
    setTimeout(()=>{
        this.props.onDelayedClick(e)
    }, this.props.delay)

  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>DelayedButton</button>
      </div>
    );
  }
}

export default DelayedButton;