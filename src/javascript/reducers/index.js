import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { testReducer } from './testReducer';
import { dragReducer } from './dragReducer';
import { mainLayoutReducer } from './mainLayoutReducer';


const rootReducer = combineReducers({
	mainLayoutReducer,
});

export default rootReducer;