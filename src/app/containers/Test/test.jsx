import React from "react";
import Tour from './Tour';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    }
  }

  onOpen = () =>
    this.setState({
      open: !this.state.open,
    });

  render() {
    return (
      <div>
        <button onClick={this.onOpen}>OPEN/CLOSE</button>
        <div
          id="first-block"
          style={{
            position: 'absolute',
            left: '30%',
            top: '50%',
            width: 100,
            height: 100,
            background: '#ff0000',
          }}
        >
        1
        </div>
        <div
          id="second-block"
          style={{
            position: 'absolute',
            left:'80%',
            top: '60%',
            width: 50,
            height: 50,
            background: '#00ff00',
          }}
        >
        2
        </div>
        <Tour
          open={this.state.open}
          elements={[
            {
              id: 'first-block',
              position: [100, 200],
              content: <div>Here is first block!</div>
            },
            {
              id: 'second-block',
              position: [500, 400],
              content: <div>Here is second block!</div>
            }
          ]}
        />
      </div>
    );
  }
}

export default Test;
