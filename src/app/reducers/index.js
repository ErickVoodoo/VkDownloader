import { combineReducers } from 'redux';

import searchGroupsReducer from './searchGroups';
import favoriteGroupsReducer from './favoriteGroups';
import dashboardGroupsReducer from './dashboardGroups';
import audioReducer from './audio';

export default combineReducers({
  searchGroupsReducer,
  favoriteGroupsReducer,
  dashboardGroupsReducer,
  audioReducer,
});
