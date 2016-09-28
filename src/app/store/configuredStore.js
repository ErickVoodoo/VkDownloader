import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { searchGroupsSaga, favoriteGroupsSaga, dashboardGroupsSaga } from '../middlewares/groups';
import audioMiddleware from '../middlewares/audio';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const audio = audioMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    audio,
    sagaMiddleware,
  )
);

sagaMiddleware.run(searchGroupsSaga);
sagaMiddleware.run(favoriteGroupsSaga);
sagaMiddleware.run(dashboardGroupsSaga);

export default store;
