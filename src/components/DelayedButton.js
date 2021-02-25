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
    e.persist()
    setTimeout(()=>{
        this.props.onDelayedClick(e)
    }, this.props.delay)

  };

  render() {
    return (
        <button onClick={this.handleClick}>DelayedButton</button>
    );
  }
}

export default DelayedButton;