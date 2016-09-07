import axios from 'axios';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { loginSuccess, loginFail, LOGIN_PENDING } from '../actions/auth';

function* loginUser(action) {
  try {
    const { username, password } = action.payload;
    const login = yield call(axios.post('http://'));
    yield put(loginSuccess(login));
  } catch(e) {
    yield put(loginFail(e));
  }
}

function* authSaga() {
  yield* takeEvery(LOGIN_PENDING, loginUser);
}

export default authSaga;
