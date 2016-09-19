import { combineReducers } from 'redux';

import searchGroupsReducer from './searchGroups';
import favoriteGroupsReducer from './favoriteGroups';

export default combineReducers({
  searchGroupsReducer,
  favoriteGroupsReducer,
});
