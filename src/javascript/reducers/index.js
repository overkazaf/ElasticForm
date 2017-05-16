import { combineReducers } from 'redux-immutable';
import { controlReducer } from './controlReducer';
import { configReducer } from './configReducer';
import { componentSiderReducer } from './componentSiderReducer';
import { toolboxReducer } from './toolboxReducer';
import { statusBarReducer } from './statusBarReducer';
import { mainLayoutReducer } from './mainLayoutReducer';


const rootReducer = combineReducers({
	configReducer,
	controlReducer,
	componentSiderReducer,
	toolboxReducer,
	statusBarReducer,
	mainLayoutReducer,
});

export default rootReducer;