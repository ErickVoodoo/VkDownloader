export const SEARCH_PENDING = 'SEARCH_PENDING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchPending = ({ search }) => ({
  type: SEARCH_PENDING,
  payload: {
    search,
  },
});

export const searchSuccess = ({ groups }) => ({
  type: SEARCH_SUCCESS,
  payload: {
    groups,
  },
});

export const searchFail = (error) => ({
  type: SEARCH_FAIL,
  error,
});
