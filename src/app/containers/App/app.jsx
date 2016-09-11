import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import style from './styles.scss';

const App = ({ children }) => (
  <div className={style.app}>
    <Header />
    <div className={style.content}>
      {children}
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
