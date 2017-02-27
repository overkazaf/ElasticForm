import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { starReducer } from './starReducer';
import { dragReducer } from './dragReducer';


const rootReducer = combineReducers({
	counterReducer,
	starReducer,
	dragReducer,
});

export default rootReducer;