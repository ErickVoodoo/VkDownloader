import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { vkSearchGroups, vkGetGroups, vkGetPosts } from '../constants/api';
import { searchSuccess, searchFail, SEARCH_PENDING } from '../actions/groups';
import { favoriteSuccess, favoriteFail, FAVORITE_PENDING } from '../actions/favorite';
import { dashboardSuccess, dashboardFail, DASHBOARD_PENDING } from '../actions/dashboard';

export function* searchGroupsSaga(action) {
  yield* takeEvery(SEARCH_PENDING, function* searchFunc(action) {
    try {
      const { search } = action.payload;
      const searchedGroups = yield axios.get(`https://crossorigin.me/${vkSearchGroups(search)}`);
      yield put(searchSuccess({ groups: searchedGroups.data.response }));
    } catch (e) {
      yield put(searchFail(e));
    }
  });
}

export function* favoriteGroupsSaga(action) {
  yield* takeEvery(FAVORITE_PENDING, function* favoriteFunc(action) {
    try {
      const { groups } = action.payload;
      const favoriteGroups = yield axios.get(`https://crossorigin.me/${vkGetGroups(groups.join(','))}`);
      yield put(favoriteSuccess({ groups: favoriteGroups.data.response }));
    } catch (e) {
      yield put(favoriteFail(e));
    }
  });
}

export function* dashboardGroupsSaga(action) {
  yield* takeEvery(DASHBOARD_PENDING, function* dashboardFunc(action) {
    try {
      const { groups } = action.payload;
      for (let i = 0; i < groups.length; i++) {
        const dashboardPost = yield axios.get(`http://crossorigin.me/${vkGetPosts(groups[i])}`);
        yield put(dashboardSuccess({ posts: dashboardPost.data.response }));
      }
    } catch (e) {
      yield put(dashboardFail(e));
    }
  });
}
