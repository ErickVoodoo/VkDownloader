import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { playAudio, pauseAudio, nextAudio, prevAudio, volumeAudio } from '../../actions/audio';
import App from './app';

const mapStateToProps = (state) => ({
  audioReducer: state.audioReducer,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    playAudio,
    pauseAudio,
    nextAudio,
    prevAudio,
    volumeAudio,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
