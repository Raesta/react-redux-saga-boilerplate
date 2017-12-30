import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import createActionBuffer from 'redux-action-buffer';
import { Layout } from './Containers';
import rootReducer from './Redux';
import rootSaga from './Sagas';
import Comfig from './Ressources/Config';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const isDev = (process.env.NODE_ENV === 'development');
  const composeEnhancers = isDev ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

  return {
    ...createStore(rootReducer,
      composeEnhancers(
        autoRehydrate(),
        applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)),
      ),
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

const store = configureStore();

persistStore(store, Comfig.persistence);

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <Layout />
    </Provider>
  </Router>
), document.getElementById('root'));

