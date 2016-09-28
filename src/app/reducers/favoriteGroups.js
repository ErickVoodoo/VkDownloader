import { FAVORITE_PENDING, FAVORITE_SUCCESS, FAVORITE_FAIL } from '../actions/favorite';

const initialState = {
  loading: false,
  groups: null,
  error: null,
};

export default function favoriteGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload.groups,
        error: null,
      };

    case FAVORITE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
