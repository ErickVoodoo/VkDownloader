import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App/app';
import Dashboard from './containers/Dashboard';
import Search from './containers/Search';
import Favorite from './containers/Favorite';
import { Main } from './constants';
import configuredStore from './store/configuredStore';

injectTapEventPlugin();

require('style!css!normalize.css/normalize.css');

const kikkoTheme = getMuiTheme({
  palette: {
    textColor: '#444',
    primary1Color: Main.COLOR.PRIMARY,
    accent1Color: Main.COLOR.ACCENT,
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
    boxColor: Main.COLOR.PRIMARY,
    checkedColor: Main.COLOR.PRIMARY,
  },
  textField: {
    errorColor: Main.COLOR.ACCENT,
    focusColor: Main.COLOR.PRIMARY,
  },
});

function run() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={kikkoTheme}>
      <Provider store={configuredStore}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="dashboard" component={Dashboard} />
            <Route path="favorite" component={Favorite} />
            <Route path="search" component={Search} />
            <IndexRoute component={Dashboard} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
}

run();
