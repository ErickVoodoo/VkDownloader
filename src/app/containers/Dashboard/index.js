import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dashboardPending, dashboardClear } from '../../actions/dashboard';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  dashboardGroupsReducer: state.dashboardGroupsReducer,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    dashboardPending,
    dashboardClear,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
