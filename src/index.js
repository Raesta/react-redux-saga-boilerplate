import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Layout } from './Containers';
import rootReducer from './Redux';
import rootSaga from './Sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const isDev = (process.env.NODE_ENV === 'development');
  const composeEnhancers = isDev ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

  return {
    ...createStore(rootReducer,
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
      ),
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

const store = configureStore();

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <Layout />
    </Provider>
  </Router>
), document.getElementById('root'));

