import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchPending } from '../../actions/groups';
import Search from './search';

const mapStateToProps = (state) => ({
  searchGroupsReducer: state.searchGroupsReducer,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    searchPending,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
