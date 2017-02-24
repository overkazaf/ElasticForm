import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from '../reducers';
import nextConnectRedux from 'next-connect-redux';

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
};

export const nextConnect = nextConnectRedux(initStore);