import { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_FAIL } from '../actions/groups';

const initialState = {
  loading: false,
  groups: null,
  error: null,
};

export default function searchGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        groups: null,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        groups: action.payload.groups,
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        groups: null,
        error: action.error,
      };

    default:
      return state;
  }
}
