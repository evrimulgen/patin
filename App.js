/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StackNav from './src/Components/Route';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>

    );
  }
}
const defaultState={ 
  value: 0,
  loginStatus: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UP':
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}


const store = createStore(reducer);

