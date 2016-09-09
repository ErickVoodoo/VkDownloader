import { LOGIN_PENDING, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/auth';

const initialState = {
  loading: false,
  error: null,
  auth: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        auth: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        auth: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        auth: null,
        error: action.error,
      };

    default:
      return state;
  }
}
