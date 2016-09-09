export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginPending = ({ username, password }) => ({
  type: LOGIN_PENDING,
  payload: {
    username,
    password,
  },
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error,
});
