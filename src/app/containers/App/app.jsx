import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import style from './styles.scss';

const App = ({ children, location }) => (
  <div className={style.app}>
    <Header location={location} />
    <div className={style.content}>
      {children}
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
};

export default App;
