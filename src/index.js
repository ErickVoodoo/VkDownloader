import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app/containers/App/app';
import Dashboard from './app/containers/Dashboard/dashboard';

// import { Main } from './constants';

require('style!css!normalize.css/normalize.css');

const kikkoTheme = getMuiTheme({
  // palette: {
  //   textColor: '#444',
  //   primary1Color: Index.COLOR.ACCENT,
  //   accent1Color: Index.COLOR.ACCENT_DANGER,
  // },
  // button: {
  //   height: 36,
  //   minWidth: 100,
  // },
  // raisedButton: {
  //   primaryColor: Index.COLOR.ACCENT,
  //   primaryTextColor: '#fff',
  // },
  // checkbox: {
  //   boxColor: Index.COLOR.ACCENT,
  //   checkedColor: Index.COLOR.ACCENT,
  // },
  // textField: {
  //   errorColor: Index.COLOR.ERROR,
  //   focusColor: Index.COLOR.ACCENT,
  // },
});

function Run() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={kikkoTheme}>
      <Router history={browserHistory}>
        <Router path="/" component={App}>
          <Router path="dashboard" component={Dashboard}/>
        </Router>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
}

Run();
