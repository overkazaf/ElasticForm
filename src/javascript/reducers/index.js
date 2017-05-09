import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { testReducer } from './testReducer';
import { designViewReducer } from './designViewReducer';
import { mainLayoutReducer } from './mainLayoutReducer';


const rootReducer = combineReducers({
	mainLayoutReducer,
});

export default rootReducer;