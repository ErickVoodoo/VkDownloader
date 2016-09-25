import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import style from './styles.scss';

const App = ({ children, location, audioReducer, playAudio, pauseAudio, nextAudio, prevAudio, volumeAudio }) => (
  <div className={style.app}>
    <Header location={location} />
    <div className={style.content}>
      {children}
    </div>
    <Footer
      audioReducer={audioReducer}
      playAudio={playAudio}
      pauseAudio={pauseAudio}
      nextAudio={nextAudio}
      prevAudio={prevAudio}
      volumeAudio={volumeAudio}
    />
  </div>
);

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,

  audioReducer: PropTypes.object,
  playAudio: PropTypes.func,
  pauseAudio: PropTypes.func,
  nextAudio: PropTypes.func,
  prevAudio: PropTypes.func,
  volumeAudio: PropTypes.func,
};

export default App;
