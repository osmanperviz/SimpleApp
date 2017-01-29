import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineRedurs, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const loggerMiddleware = createLogger({ predicate: (getStae, actions) => __DEV__})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class SimpleProject extends Component {
  render() {
    return (
      <View>
        <Text>
          ollaa
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <SimpleProject />
  </Provider>
)
AppRegistry.registerComponent('SimpleProject', () => App);
