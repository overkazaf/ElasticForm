import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from '../reducers';
import nextConnectRedux from 'next-connect-redux';

console.log(reducer);

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
};

export const nextConnect = nextConnectRedux(initStore);