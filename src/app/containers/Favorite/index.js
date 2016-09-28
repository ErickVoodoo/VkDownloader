import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoritePending } from '../../actions/favorite';
import Favorite from './favorite';

const mapStateToProps = (state) => ({
  favoriteGroupsReducer: state.favoriteGroupsReducer,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    favoritePending,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
