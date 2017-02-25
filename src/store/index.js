import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import nextConnectRedux from 'next-connect-redux';
import Immutable from 'immutable';

export const initStore = (initialState) => {
  return createStore(rootReducer, Immutable.fromJS(initialState), applyMiddleware(thunkMiddleware))
};

export const nextConnect = nextConnectRedux(initStore);