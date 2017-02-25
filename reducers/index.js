import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { starReducer } from './starReducer';


const rootReducer = combineReducers({
	counterReducer,
	starReducer,
});

export default rootReducer;