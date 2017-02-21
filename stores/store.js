import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import nextConnectRedux from 'next-connect-redux';
import * as ActionTypes from '../constants/ActionTypes.js';

export const reducer = (state = { shown: false }, action) => {
  switch (action.type) {
    case ActionTypes.SHOW: return { shown: true };
    case ActionTypes.HIDE: return { shown: false };
    default: return state;
  }
};

export const showAction = () => dispatch => {
  return () => dispatch({ type: ActionTypes.SHOW});
};

export const hideAction = () => dispatch => {
  return () => dispatch({ type: ActionTypes.HIDE});
};

export const initStore = function (initialState) {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};

export const nextConnect = nextConnectRedux(initStore);