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
const defaultState = {
  VeryEasySlalom: [],
  EasySlalom: [],
  MediumSlalom: [],
  HardSlalom: [],
  VeryHardSlalom: [],
  VeryEasySlide: [],
  EasySlide: [],
  MediumSlide: [],
  HardSlide: [],
  VeryHardSlide: [],
  loginStatus: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_DATA_VERY_EASY_SLALOM':
      return { ...state, VeryEasySlalom: action.data }
    case 'GET_DATA_EASY_SLALOM':
      return { ...state, EasySlalom: action.data }
    case 'GET_DATA_MEDIUM_SLALOM':
      return { ...state, MediumSlalom: action.data }
    case 'GET_DATA_HARD_SLALOM':
      return { ...state, HardSlalom: action.data }
    case 'GET_DATA_VERY_HARD_SLALOM':
      return { ...state, VeryHardSlalom: action.data }
    case 'GET_DATA_VERY_EASY_SLIDE':
      return { ...state, VeryEasySlide: action.data }
    case 'GET_DATA_EASY_SLIDE':
      return { ...state, EasySlide: action.data }
    case 'GET_DATA_MEDIUM_SLIDE':
      return { ...state, MediumSlide: action.data }
    case 'GET_DATA_HARD_SLIDE':
      return { ...state, HardSlide: action.data }
    case 'GET_DATA_VERY_HARD_SLIDE':
      return { ...state, VeryHardSlide: action.data }

    default:
      return state
  }
}


const store = createStore(reducer);

