import Immutable, { Map, List } from 'immutable';

const initState = {
	counter: 1,
};

export const reducer = (state = Immutable.fromJS(initState), action) => {
  switch (action.type) {
    case 'INC': {
    	let $$state = Immutable.fromJS(state);
    	let $$newState = $$state.set('counter', $$state.get('counter') + action.payload);
    	console.log($$state.get('counter'));
    	return $$newState.toObject();
    }
    default: return state;
  }
};