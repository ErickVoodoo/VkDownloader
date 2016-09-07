import React, { PropTypes } from 'react';
import Dashboard from '../Dashboard/dashboard';
import Header from './header';

const App = ({ children }) => (
  <div>
    <Header />
    <div>
      {children || <Dashboard />}
    </div>
    Footer
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
