import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineRedurs, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import { AppRegistry } from 'react-native';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/sagas'

import AppContainer from './app/containers/AppContainer'

const loggerMiddleware = createLogger({ predicate: (getStae, actions) => __DEV__})
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      sagaMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer)
}
const store = configureStore({})
sagaMiddleware.run(rootSaga)


const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
AppRegistry.registerComponent('SimpleProject', () => App);
