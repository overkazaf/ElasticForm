import { combineReducers } from 'redux-immutable';
import { counterReducer } from './counterReducer';
import { configReducer } from './configReducer';
import { designViewReducer } from './designViewReducer';
import { mainLayoutReducer } from './mainLayoutReducer';


const rootReducer = combineReducers({
	configReducer,
	mainLayoutReducer,
});

export default rootReducer;