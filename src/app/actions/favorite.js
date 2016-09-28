export const FAVORITE_PENDING = 'FAVORITE_PENDING';
export const FAVORITE_SUCCESS = 'FAVORITE_SUCCESS';
export const FAVORITE_FAIL = 'FAVORITE_FAIL';

export const favoritePending = ({ groups }) => ({
  type: FAVORITE_PENDING,
  payload: {
    groups,
  },
});

export const favoriteSuccess = ({ groups }) => ({
  type: FAVORITE_SUCCESS,
  payload: {
    groups,
  },
});

export const favoriteFail = (error) => ({
  type: FAVORITE_FAIL,
  error,
});
