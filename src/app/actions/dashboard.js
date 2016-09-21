export const DASHBOARD_PENDING = 'DASHBOARD_PENDING';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_FAIL = 'DASHBOARD_FAIL';
export const DASHBOARD_CLEAR = 'DASHBOARD_CLEAR';

export const dashboardPending = ({ groups }) => ({
  type: DASHBOARD_PENDING,
  payload: {
    groups,
  },
});

export const dashboardSuccess = ({ posts }) => ({
  type: DASHBOARD_SUCCESS,
  payload: {
    posts,
  },
});

export const dashboardFail = (error) => ({
  type: DASHBOARD_FAIL,
  error,
});

export const dashboardClear = () => ({
  type: DASHBOARD_CLEAR,
});
