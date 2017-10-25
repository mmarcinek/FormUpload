import React, { Component } from 'react';
import AppWrapper from './app/containers/AppWrapper'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const loggerMiddleware = createLogger({ predicate: (getState, action ) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class FormUpload extends Component {
  render(){
    return (
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    )
  }
}
