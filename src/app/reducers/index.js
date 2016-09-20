import { combineReducers } from 'redux';

import searchGroupsReducer from './searchGroups';
import favoriteGroupsReducer from './favoriteGroups';
import dashboardGroupsReducer from './dashboardGroups';

export default combineReducers({
  searchGroupsReducer,
  favoriteGroupsReducer,
  dashboardGroupsReducer,
});
