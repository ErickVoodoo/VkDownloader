import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { searchGroupsSaga, favoriteGroupsSaga, dashboardGroupsSaga } from '../middlewares/groups';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    sagaMiddleware
  )
);

sagaMiddleware.run(searchGroupsSaga);
sagaMiddleware.run(favoriteGroupsSaga);
sagaMiddleware.run(dashboardGroupsSaga);

export default store;
