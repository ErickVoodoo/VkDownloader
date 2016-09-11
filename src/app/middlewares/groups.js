import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { vkSearchGroups } from '../constants/api';
import { searchSuccess, searchFail, SEARCH_PENDING } from '../actions/groups';

function* searchGroups(action) {
  try {
    const { search } = action.payload;
    const searchedGroups = yield axios.get(`https://crossorigin.me/${vkSearchGroups(search)}`);
    yield put(searchSuccess({ groups: searchedGroups.data.response }));
  } catch (e) {
    yield put(searchFail(e));
  }
}

function* searchGroupsSaga() {
  yield* takeEvery(SEARCH_PENDING, searchGroups);
}

export default searchGroupsSaga;
