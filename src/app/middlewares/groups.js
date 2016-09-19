import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { vkSearchGroups, vsGetGroups } from '../constants/api';
import { searchSuccess, searchFail, SEARCH_PENDING } from '../actions/groups';
import { favoriteSuccess, favoriteFail, FAVORITE_PENDING } from '../actions/favorite';

export function* searchGroupsSaga(action) {
  yield* takeEvery(SEARCH_PENDING, function* search(action) {
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
  yield* takeEvery(FAVORITE_PENDING, function* favorite(action) {
    try {
      const { groups } = action.payload;
      const favoriteGroups = yield axios.get(`https://crossorigin.me/${vsGetGroups(groups.join(','))}`);
      yield put(favoriteSuccess({ groups: favoriteGroups.data.response }));
    } catch (e) {
      yield put(favoriteFail(e));
    }
  });
}

// function* searchGroupsSaga() {
//   yield* takeEvery(SEARCH_PENDING, searchGroups);
// }

// function* favoriteGroupsSaga() {
//   yield* takeEvery(FAVORITE_PENDING, favoriteGroups);
// }

// export {
//   searchGroupsSaga,
//   favoriteGroupsSaga,
// };
