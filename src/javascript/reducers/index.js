import { combineReducers } from 'redux-immutable';
import { menubarReducer } from './menubarReducer';
import { configReducer } from './configReducer';
import { componentSiderReducer } from './componentSiderReducer';
import { toolboxReducer } from './toolboxReducer';
import { statusBarReducer } from './statusBarReducer';
import { mainLayoutReducer } from './mainLayoutReducer';


const rootReducer = combineReducers({
	configReducer,
	menubarReducer,
	componentSiderReducer,
	toolboxReducer,
	statusBarReducer,
	mainLayoutReducer,
});

export default rootReducer;