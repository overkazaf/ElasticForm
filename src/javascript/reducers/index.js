import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { testReducer } from './testReducer';
import { dragReducer } from './dragReducer';


const rootReducer = combineReducers({
	counterReducer,
	testReducer,
	dragReducer,
});

export default rootReducer;