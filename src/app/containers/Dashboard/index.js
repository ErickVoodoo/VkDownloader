import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dashboardPending, dashboardClear } from '../../actions/dashboard';
import { playAudio, pauseAudio } from '../../actions/audio';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  dashboardGroupsReducer: state.dashboardGroupsReducer,
  audioReducer: state.audioReducer,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    dashboardPending,
    dashboardClear,
    playAudio,
    pauseAudio,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
