import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../redux/reducers';
import RootNavigation from '../navigation/Root';
import rootSaga from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = () => {
  const reduxDevToolsEnhancer = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = __DEV__
    ? reduxDevToolsEnhancer
      ? reduxDevToolsEnhancer({
          shouldHotReload: false,
        })
      : compose
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  return {
    ...createStore(rootReducer, enhancer),
    runSaga: sagaMiddleware.run,
  };
};

const theStore = store();
theStore.runSaga(rootSaga);

const AppBootstrap: FC = () => {
  return (
    <Provider store={theStore}>
      <RootNavigation />
    </Provider>
  );
};

export default AppBootstrap;
