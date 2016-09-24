import { DASHBOARD_PENDING, DASHBOARD_SUCCESS, DASHBOARD_FAIL, DASHBOARD_CLEAR } from '../actions/dashboard';

const initialState = {
  loading: false,
  posts: null,
  error: null,
};

export default function dashboardGroupsReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DASHBOARD_SUCCESS: {
      const { posts } = action.payload;
      const newPosts = [...state.posts || [], ...posts.slice(1)];
      // newPosts.sort(() => Math.random() - 0.5);
      return {
        ...state,
        loading: false,
        error: null,
        posts: newPosts,
      };
    }

    case DASHBOARD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DASHBOARD_CLEAR:
      return {
        ...state,
        loading: false,
        posts: null,
      };

    default:
      return state;
  }
}
