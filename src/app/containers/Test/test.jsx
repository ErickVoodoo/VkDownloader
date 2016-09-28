import React from 'react';
import { RaisedButton } from 'material-ui';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import Tour from './Tour';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
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
            left: '80%',
            top: '60%',
            width: 50,
            height: 50,
            background: '#00ff00',
          }}
        >
        2
        </div>
        <div
          id="third-block"
          style={{
            position: 'absolute',
            left: '90%',
            top: '20%',
            width: 20,
            height: 20,
            background: '#0000ff',
          }}
        >
        3
        </div>
        <div
          id="fourth-block"
          style={{
            position: 'absolute',
            left: '20%',
            top: '80%',
            width: 200,
            height: 200,
            background: '#ff00ff',
          }}
        >
        4
        </div>
        <Tour
          open={this.state.open}
          onClose={this.onOpen}
          nextButton={
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <RaisedButton
                label="next"
              />
            </MuiThemeProvider>}
          closeButton={
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <RaisedButton
                label="close"
              />
            </MuiThemeProvider>}
          elements={[
            {
              id: 'first-block',
              position: [100, 100],
              content: <div>Here is first block!</div>,
            },
            {
              id: 'second-block',
              position: [100, 100],
              content: <div>Here is second block!</div>,
            },
            {
              id: 'third-block',
              position: [100, 100],
              content: <div>Here is third block!</div>,
            },
            {
              id: 'fourth-block',
              position: [100, 100],
              content: <div>Here is fourth block!</div>,
            },
          ]}
        />
      </div>
    );
  }
}

export default Test;
