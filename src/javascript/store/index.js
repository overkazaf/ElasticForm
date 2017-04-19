import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import nextConnectRedux from 'next-connect-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';
import dragEpic from '../epics/dragEpic';
import rootEpics from '../epics';

import DevTools from '../components/DevTools/index.js';

// It will raise an error while running in server side enviroment
// so we must test if the window object is valid before using the __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ var
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(combineEpics(...rootEpics));

export const initStore = (initialState) => {
  return createStore(
  		rootReducer, 
  		Immutable.fromJS(initialState), 
  		composeEnhancers(
  			applyMiddleware(thunkMiddleware, epicMiddleware)
  		),
  	)
};

export const nextConnect = nextConnectRedux(initStore);