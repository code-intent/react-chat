import React, { Component } from 'react';
import Chat from './Chat';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Chat /> }
      </Provider>
    );
  }
}
