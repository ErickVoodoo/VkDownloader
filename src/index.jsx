import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/containers/App/app';
import Dashboard from './app/containers/Dashboard/dashboard';
import { Main } from './app/constants';

injectTapEventPlugin();

require('style!css!normalize.css/normalize.css');

const kikkoTheme = getMuiTheme({
  palette: {
    textColor: '#444',
    primary1Color: Main.COLOR.ACCENT,
    accent1Color: Main.COLOR.ACCENT_DANGER,
  },
  button: {
    height: 36,
    minWidth: 100,
  },
  raisedButton: {
    primaryColor: Main.COLOR.ACCENT,
    primaryTextColor: '#fff',
  },
  checkbox: {
    boxColor: Main.COLOR.ACCENT,
    checkedColor: Main.COLOR.ACCENT,
  },
  textField: {
    errorColor: Main.COLOR.ERROR,
    focusColor: Main.COLOR.ACCENT,
  },
});

function run() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={kikkoTheme}>
      <Router history={browserHistory}>
        <Router path="/" component={App}>
          <Router path="dashboard" component={Dashboard} />
        </Router>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
}

run();
