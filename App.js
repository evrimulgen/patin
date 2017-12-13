/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './src/components/App';

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
      
    );
  }
}

const reducer = (state = {value:0}, action) => {
   switch (action.type) {
     case 'UP':
       return { ...state, value: state.value+1 }
     default:
       return state
   }
 }


const store = createStore(reducer);

